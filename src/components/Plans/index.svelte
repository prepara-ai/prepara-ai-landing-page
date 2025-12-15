<script lang="ts">
  import { type PlanType } from "../../application/client-store";
  import Button from "../Button/index.svelte";
  import Content from "../Main/content.svelte";

  export let onRequestPlan: (planType: PlanType) => void;
</script>

<section id="our-plans-container" class="plans-container">
  <section class="plans-section">
    <h1 class="plans-title">Nossos Planos</h1>
  </section>

  <section class="plans-section">
    <Content
      title="Individual"
      backgroundColor="#333"
      textColor="#fff"
      isAnimated
    >
      <section slot="children">
        <p class="plan-price">
          <strong class="plan-price-value">R$ 72,90</strong>
          <span>por mês</span>
          <Button
            text="Quero conhecer o plano"
            color="success"
            onClick={() => {
              onRequestPlan("individual");
            }}
            trackingDetails={{
              name: "cta_click",
              cta_type: "request_individual_plan_button",
              cta_text: "Quero conhecer o plano",
            }}
          />
        </p>

        <hr />

        <ul class="plan-details">
          <li>Cadastro de até <strong>20 alunos</strong></li>
          <li>Cadastro de até <strong>1 admin</strong></li>
          <li>Cadastro de até <strong>3 segmentos</strong></li>
          <li>
            Cadastro <strong>ilimitado</strong> de
            <strong>questões personalizadas</strong>
          </li>
          <li>Preparação de ambiente sob demanda</li>
          <li>
            Cadastro <strong>ilimitado</strong> de <strong>simulados</strong>
          </li>
          <li>
            Análise básica <strong>de desempenho</strong>
          </li>
          <li>
            Suporte por <strong>e-mail</strong> em até <strong>48h</strong>
          </li>
        </ul>
      </section>
    </Content>

    <Content
      title="Essencial"
      backgroundColor="#333"
      textColor="#fff"
      isAnimated
    >
      <section slot="children">
        <p class="plan-price">
          <strong class="plan-price-value">R$ 209,90</strong>
          <span>por mês</span>
          <Button
            text="Quero conhecer o plano"
            color="success"
            onClick={() => {
              onRequestPlan("essential");
            }}
            trackingDetails={{
              name: "cta_click",
              cta_type: "request_essential_plan_button",
              cta_text: "Quero conhecer o plano",
            }}
          />
        </p>

        <hr />

        <ul class="plan-details">
          <li>Cadastro de até <strong>100 alunos</strong></li>
          <li>Cadastro de até <strong>5 admins</strong></li>
          <li>Cadastro de até <strong>10 segmentos</strong></li>
          <li>
            Cadastro <strong>ilimitado</strong> de
            <strong>questões personalizadas</strong>
          </li>
          <li>Preparação de ambiente sob demanda</li>
          <li>
            Cadastro <strong>ilimitado</strong> de <strong>simulados</strong>
          </li>
          <li>
            Análise básica <strong>de desempenho</strong>
          </li>
          <li>
            Criação <strong>automática</strong> de questões com
            <strong>IA</strong>
          </li>
          <li>
            Relatórios básicos <strong>sob demanda</strong> em até 5 dias úteis
          </li>
          <li>
            Suporte por <strong>e-mail</strong> em até <strong>24h</strong>
          </li>
        </ul>
      </section>
    </Content>

    <Content
      title="Avançado"
      backgroundColor="#333"
      textColor="#fff"
      isAnimated
    >
      <section slot="children">
        <p class="plan-price">
          <strong class="plan-price-value">R$ 499,00</strong>
          <span>por mês</span>
          <Button
            text="Quero conhecer o plano"
            color="success"
            onClick={() => {
              onRequestPlan("advanced");
            }}
            trackingDetails={{
              name: "cta_click",
              cta_type: "request_advanced_plan_button",
              cta_text: "Quero conhecer o plano",
            }}
          />
        </p>

        <hr />

        <ul class="plan-details">
          <li>Cadastro de até <strong>500 alunos</strong></li>
          <li>Cadastro de até <strong>20 admins</strong></li>
          <li>Cadastro de até <strong>50 segmentos</strong></li>
          <li>
            Cadastro <strong>ilimitado</strong> de
            <strong>questões personalizadas</strong>
          </li>
          <li>Preparação de ambiente sob demanda</li>
          <li>
            Cadastro <strong>ilimitado</strong> de <strong>simulados</strong>
          </li>
          <li>
            Análise básica <strong>de desempenho</strong>
          </li>
          <li>
            Criação <strong>automática</strong> de questões com
            <strong>IA</strong>
          </li>
          <li>
            Análise avançada <strong> de desempenho</strong>
          </li>
          <li>
            Relatórios básicos <strong>sob demanda</strong> em até 3 dias úteis
          </li>
          <li>
            Relatórios avançados <strong>sob demanda</strong> em até 5 dias úteis
          </li>
          <li>
            Suporte por <strong>e-mail</strong> em até <strong>12h</strong>
          </li>
        </ul>
      </section>
    </Content>

    <Content title="Premium" backgroundColor="#333" textColor="#fff" isAnimated>
      <section slot="children">
        <p class="plan-price">
          <strong class="plan-price-value">R$ 999,00</strong>
          <span>por mês</span>
          <Button
            text="Quero conhecer o plano"
            color="success"
            onClick={() => {
              onRequestPlan("premium");
            }}
            trackingDetails={{
              name: "cta_click",
              cta_type: "request_premium_plan_button",
              cta_text: "Quero conhecer o plano",
            }}
          />
        </p>

        <hr />

        <ul class="plan-details">
          <li>Cadastro de até <strong>2000 alunos</strong></li>
          <li>Cadastro de até <strong>50 admins</strong></li>
          <li>
            Cadastro <strong>ilimitado</strong> de <strong>segmentos</strong>
          </li>
          <li>
            Cadastro <strong>ilimitado</strong> de
            <strong>questões personalizadas</strong>
          </li>
          <li>Preparação de ambiente sob demanda</li>
          <li>
            Cadastro <strong>ilimitado</strong> de <strong>simulados</strong>
          </li>
          <li>
            Análise básica <strong>de desempenho</strong>
          </li>
          <li>
            Criação <strong>automática</strong> de questões com
            <strong>IA</strong>
          </li>
          <li>
            Análise avançada <strong>de desempenho</strong>
          </li>
          <li>
            Relatórios básicos <strong>sob demanda</strong> em até 24 horas
          </li>
          <li>
            Relatórios avançados <strong>sob demanda</strong> em até 3 dias úteis
          </li>
          <li>Acesso a <strong>API</strong> do Prepara Aí</li>
          <li>
            Possibilidade de desenvolvimento de <strong
              >funcionalidades personalizadas</strong
            >
          </li>
          <li>
            Suporte por <strong>e-mail</strong> em até <strong>8h</strong>
          </li>
          <li>Suporte por <strong>WhatsApp</strong></li>
        </ul>
      </section>
    </Content>

    <Content title="Custom" backgroundColor="#333" textColor="#fff" isAnimated>
      <section slot="children">
        <p class="plan-price">
          <strong class="plan-price-value">Sob Consulta</strong>
          <span>Plano Personalizado</span>
          <Button
            text="Quero um plano personalizado"
            color="success"
            onClick={() => {
              onRequestPlan("custom");
            }}
            trackingDetails={{
              name: "cta_click",
              cta_type: "request_custom_plan_button",
              cta_text: "Quero um plano personalizado",
            }}
          />
        </p>

        <hr />

        <ul class="plan-details">
          <li>
            Cadastro de <strong>alunos, admins e segmentos</strong> sem limite
          </li>
          <li>
            <strong>Ambiente dedicado</strong> e infraestrutura personalizada
          </li>
          <li>
            <strong>Funcionalidades sob demanda</strong>, desenvolvidas conforme
            necessidade
          </li>
          <li>
            Integração avançada via <strong>API</strong> e suporte a sistemas externos
          </li>
          <li>
            <strong>Análises e relatórios personalizados</strong> conforme necessidade
          </li>
          <li>
            Criação de <strong>simulados e questões</strong> totalmente customizada
          </li>
          <li>
            Acompanhamento de <strong>desempenho detalhado</strong> com dashboards
            exclusivos
          </li>
          <li>
            <strong>Suporte prioritário</strong> por e-mail e WhatsApp
          </li>
        </ul>
      </section>
    </Content>
  </section>
</section>

<style>
  .plans-container {
    background-color: rgba(245, 247, 250, 1);
    color: #333;
    width: 100%;
    box-sizing: border-box;
    padding: 1.5rem;
    border-radius: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .plans-section {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;
  }

  .plans-title {
    font-size: 2.5rem;
  }

  .plan-price {
    font-size: 1.5rem;
    margin: 0.5rem;
    display: flex;
    flex-direction: column;
  }

  .plan-price-value {
    font-size: 2.5rem;
  }

  .plan-details {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.325rem;
    padding: 0 3rem;
  }
</style>
