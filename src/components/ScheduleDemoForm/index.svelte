<script lang="ts">
  import type { SvelteComponent } from "svelte";
  import {
    clientRequestOptionSelected,
    selectedPlan,
    type PlanType,
    type RequestOption,
  } from "../../application/client-store";
  import Button from "../Button/index.svelte";
  import Toast from "../Toast/root.svelte";

  let toast: SvelteComponent;

  const moveToRequestedCard = (chosenValue: RequestOption) => {
    const cardGroup = document.getElementById("form-input-card-group");
    const selectedCard = document.getElementById(
      `form-input-card-${chosenValue}`
    );

    if (cardGroup && selectedCard) {
      const cardGroupWidth = cardGroup.offsetWidth;
      const cardWidth = selectedCard.offsetWidth;
      const cardLeft = selectedCard.offsetLeft;

      if (
        cardLeft < cardGroup.scrollLeft ||
        cardLeft + cardWidth > cardGroup.scrollLeft + cardGroupWidth
      ) {
        cardGroup.scrollLeft = cardLeft - (cardGroupWidth - cardWidth) / 2;
      }
    }
  };

  let clientName = "";
  let clientEmail = "";
  let isSendingEmail = false;

  const handleIsFormDisabled = (name: string, email: string) => {
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    return !!(!name || !isEmailValid);
  };

  const resetForm = () => {
    clientRequestOptionSelected.set(null);
    selectedPlan.set(null);
    clientName = "";
    clientEmail = "";
  };

  $: isFormDisabled = handleIsFormDisabled(clientName, clientEmail);

  const sendEmail = async () => {
    try {
      isSendingEmail = true;

      const sendEmailResponse = await fetch(
        "https://email-api.preparaai.com.br/api/email/send",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            clientRequestOptionSelected: $clientRequestOptionSelected,
            selectedPlan: $selectedPlan,
            clientName,
            clientEmail,
          }),
        }
      );

      const { status } = sendEmailResponse;

      isSendingEmail = false;

      if (status === 200) {
        toast.showToast(
          "success",
          6000,
          "Pedido de demonstração enviado!",
          "Enviamos um e-mail com os próximos passos. Em breve entraremos em contato."
        );
        resetForm();
        return;
      }

      toast.showToast(
        "error",
        3500,
        "Erro ao enviar solicitação",
        "Revise as suas informações e tente novamente"
      );
    } catch (err) {
      isSendingEmail = false;
      toast.showToast(
        "error",
        3500,
        "Erro ao enviar solicitação",
        "Revise as suas informações e tente novamente"
      );
    }
  };

  let selectedPlanValue: PlanType | null = null;

  selectedPlan.subscribe((value) => {
    selectedPlanValue = value;
    moveToRequestedCard("requestPlan");
  });
</script>

<Toast bind:this={toast} />

<div id="schedule-demo-form-container" class="form-container">
  <form class="form-card">
    <h1 class="form-title">Conheça agora nossa plataforma</h1>

    <h2>
      {#if selectedPlanValue}
        Você escolheu o plano {selectedPlanValue.toUpperCase()}. Quer ver como
        ele funciona na prática?
      {:else}
        Quer ver como ela funciona na prática?
      {/if}
    </h2>

    <p class="form-microcopy">Demonstração gratuita. Sem compromisso.</p>

    <section class="form-inputs-container">
      <div class="form-input-container">
        <label class="form-label" for="client-name">Seu Nome</label>
        <input
          class="form-input"
          id="client-name"
          type="text"
          placeholder="Seu Nome"
          bind:value={clientName}
          disabled={isSendingEmail}
        />
      </div>

      <div class="form-input-container">
        <label class="form-label" for="client-email">Seu melhor Email</label>
        <input
          class="form-input"
          id="client-email"
          type="email"
          placeholder="seunome@email.com"
          bind:value={clientEmail}
          disabled={isSendingEmail}
        />
      </div>
    </section>

    <Button
      isDisabled={isFormDisabled || isSendingEmail}
      text={"Quero ver a demonstração"}
      color="success"
      onClick={sendEmail}
      trackingDetails={{
        name: "lead_submission",
        method: "email",
        request_type: `demo_request_plan_${selectedPlanValue || "not_selected"}`,
      }}
    />
  </form>
</div>

<style>
  .form-container {
    display: flex;
    justify-content: center;
    /* border-top: 1px solid gray; */
    /* border-bottom: 1px solid gray; */
    max-width: 85vw;
    min-width: 85vw;
  }

  .form-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 1rem;
    min-width: 320px;
    max-width: 760px;
  }

  .form-title {
    color: #333;
    text-align: center;
    font-size: 2.5rem;
  }

  .form-microcopy {
    margin-top: 0.5rem;
    margin-bottom: 1.5rem;
    font-size: 0.95rem;
    color: #6b7280;
  }

  .form-inputs-container {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }

  .form-input-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }

  .form-label {
    font-size: 1.2rem;
  }

  .form-input {
    font-size: 1rem;
    text-align: center;
    min-width: 100%;
    max-width: 100%;
    padding: 0.75rem 1rem;
    background-color: #fafafa;
    border: 1px solid #ddd;
    outline: 1px solid transparent;
    transition: border 0.3s;
    transition: outline 0.3s;
    border-radius: 0.5rem;
    transition: all 0.3s ease;

    &:focus,
    &:hover {
      border-color: rgba(0, 133, 120, 1);
      box-shadow: 0 0 0 3px rgba(0, 133, 120, 0.3);
      outline: none;
    }

    @media (min-width: 480px) {
      font-size: 1.2rem;
      min-width: 375px;
      max-width: 375px;
    }
  }

  .form-input::placeholder {
    color: #aaa;
    font-size: 1rem;
  }

  .form-select {
    font-size: 1rem;
    text-align: center;
    min-width: 100%;
    max-width: 100%;
    padding: 0.25rem 0;
    background-color: #fafafa;
    border: 1px solid #ddd;
    outline: 1px solid transparent;
    transition: all ease 0.3s;
    border-radius: 0.75rem;

    &:focus,
    &:hover {
      border-color: rgba(0, 133, 120, 1);
      box-shadow: 0 0 0 3px rgba(0, 133, 120, 0.3);
      outline: none;
    }

    @media (min-width: 480px) {
      font-size: 1.2rem;
      min-width: 375px;
      max-width: 375px;
    }
  }

  .form-input-card-group {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
    overflow-x: auto;
    min-height: 8rem;
    padding: 0.5rem;

    @media (min-width: 480px) {
      gap: 2rem;
    }
  }

  .form-input-card {
    all: unset;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    cursor: pointer;
    transition: transform 0.3s;
    border-radius: 10px;
    background-color: rgba(245, 247, 250, 1);
    min-width: 40vw;
    max-width: 40vw;
    min-height: 3.5rem;
    max-height: 3.5rem;
    outline: transparent;
    transition: all 0.3s ease;

    @media (min-width: 480px) {
      min-width: 10rem;
      max-width: 10rem;
    }

    &:focus,
    &:hover {
      border-color: rgba(0, 133, 120, 1);
      box-shadow: 0 0 0 3px rgba(0, 133, 120, 0.3);
      outline: none;
    }
  }

  .form-input-card-selected {
    /* box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1); */
    outline: 0.175rem solid rgba(0, 145, 138, 1);
  }

  .form-input-card-text {
    font-size: 1rem;
    text-align: center;

    @media (min-width: 480px) {
      font-size: 1.25rem;
    }
  }

  .empty-section {
    min-height: 30vh;
  }
</style>
