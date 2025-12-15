<script lang="ts">
  import { onMount } from "svelte";
  import {
    clientRequestOptionSelected,
    ourPlansEvent,
    selectedPlan,
  } from "../../application/client-store";
  import imageSuccessOpacity from "../../assets/image-success-opacity.png";
  import { trackPageView } from "../../scripts/analytics";
  import Button from "../Button/index.svelte";
  import Plans from "../Plans/index.svelte";
  import ScheduleDemoForm from "../ScheduleDemoForm/index.svelte";
  import Content from "./content.svelte";

  onMount(() => {
    trackPageView();
  });

  const scrollIntoScheduleForm = () => {
    const element = document.getElementById("schedule-demo-form-container");

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  clientRequestOptionSelected.subscribe(scrollIntoScheduleForm);

  const scrollIntoOurPlans = () => {
    const element = document.getElementById("our-plans-container");

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  ourPlansEvent.subscribe(scrollIntoOurPlans);
</script>

<main>
  <div class="hero">
    <img
      src={imageSuccessOpacity}
      alt="Imagem ilustrativa de pessoas comemorando o sucesso"
    />

    <div class="overlay">
      <h1 class="main-title" style="max-width: 50rem;">
        Transforme a preparação dos seus alunos com a Plataforma Prepara Aí
      </h1>

      <p class="main-subtitle">
        Engaje e prepare os seus alunos com uma plataforma inovadora para
        criação de <strong>simulados</strong> feita sob medida para educadores dedicados
        como você. Seja a força aliada no caminho rumo à excelência acadêmica que
        vai elevar o desempenho dos seus alunos a níveis extraordinários.
      </p>

      <Button
        text="Comece conhecendo os planos"
        color="success"
        onClick={scrollIntoOurPlans}
        trackingDetails={{
          name: "cta_click",
          cta_type: "start_using_platform_button",
          cta_text: "Comece conhecendo os planos",
        }}
      />
    </div>
  </div>

  <!-- <p class="main-subtitle">
    Quer experimentar a plataforma por <strong>1 mês</strong> e aproveitar de
    <strong>todos os recursos</strong> que temos a oferecer?
  </p>

  <Button
    text="Solicite seu período gratuito"
    color="success"
    onClick={() => {
      clientRequestOptionSelected.set("requestFreeTrial");
      scrollIntoScheduleForm();
    }}
    trackingDetails={{ name: "request_free_trial_button" }}
  /> -->

  <!-- <h2>O que dizem nossos clientes</h2> -->

  <!-- <Video
    width={760}
    height={360}
    source={clientTestimonial}
    title="Demonstração da plataforma"
  /> -->

  <section class="content-container">
    <Content
      title="Personalização e Excelência"
      description="Crie <strong>simulados personalizados</strong> de forma simples e eficiente, escolhendo entre uma ampla gama de questões que você pode <strong>gerar automaticamente</strong> ou <strong>adicionando as suas próprias</strong>. Garanta que cada teste seja <strong>único</strong>, <strong>adaptado</strong> às necessidades específicas de sua turma, e prepare seus alunos para os desafios que os aguardam."
    />

    <Content
      title="Automatização Inteligente para o Sucesso"
      description="<strong>Transforme</strong> seu processo de ensino com nossa automação inteligente. Ofereça
    uma experiência de exame realista, ajustando <strong>temporizadores</strong> e <strong>pesos de questões</strong> conforme sua preferência. Prepare seus alunos não apenas para
    responder às perguntas, mas para <strong>dominar</strong> o tempo e <strong>otimizar</strong> sua estratégia
    de teste."
    />

    <Content
      title="Envolva todos os seus professores"
      description="Divida suas turmas em <strong>segmentos</strong> e atribua cada segmento para o professor <strong>responsável pela turma</strong>. Desse modo, você consegue extrair o máximo de <strong>engajamento</strong> dos seus alunos através da dedicação exclusiva de cada professor."
    />

    <Content
      title="Alcance o Pico da Educação"
      description="Com a Plataforma <strong>Prepara Aí</strong>, você não apenas alcança o topo da educação, mas também <strong>lidera o caminho</strong>. Desenvolvida especialmente para educadores apaixonados, nossa plataforma oferece as ferramentas e recursos necessários para <strong>impulsionar o aprendizado</strong> dos seus alunos."
    />

    <!-- <Content
      title="Junte-se à Revolução Educacional"
      description="Prepare-se para o futuro da educação com a Plataforma <strong>Prepara Aí</strong>. Junte-se a milhares de educadores visionários que estão moldando a próxima geração de líderes, capacitando seus alunos com o <strong>conhecimento</strong> e as <strong>habilidades</strong> necessárias para enfrentar os desafios do mundo moderno."
    /> -->

    <!-- <Content
      title="Desafie os Limites do Aprendizado"
      description="Na Plataforma <strong>Prepara Aí</strong>, a jornada educacional é uma experiência <strong>dinâmica</strong> e <strong>envolvente</strong>. Desperte a curiosidade dos seus alunos, <strong>desafie-os</strong> a alcançar novos patamares e inspire-os a buscar o conhecimento com paixão e determinação."
    /> -->
  </section>

  <Plans
    onRequestPlan={(planType) => {
      clientRequestOptionSelected.set("requestPlan");
      selectedPlan.set(planType);
      scrollIntoScheduleForm();
    }}
  />

  <ScheduleDemoForm />
</main>

<style>
  .main-title {
    text-align: center;
    font-size: 2rem;

    @media (min-width: 480px) {
      font-size: 2.5rem;
    }

    @media (min-width: 760px) {
      font-size: 3.5rem;
    }
  }

  .main-subtitle {
    text-align: center;
    margin: 1rem 0;
    font-size: 1rem;

    @media (min-width: 480px) {
      font-size: 1.2rem;
    }

    @media (min-width: 760px) {
      font-size: 1.5rem;
    }

    @media (min-width: 1024px) {
      max-width: 50vw;
    }
  }

  .content-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    margin: 3rem 1rem;
    max-width: 1024px;
    gap: 3rem;
  }

  .hero {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }

  .hero img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }

  .overlay {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    color: white;
    text-align: center;
    padding: 2rem;
    background: rgba(0, 0, 0, 0.3);
  }
</style>
