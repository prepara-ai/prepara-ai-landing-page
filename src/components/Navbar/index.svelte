<script lang="ts">
  import {
    clientRequestOptionSelected,
    ourPlansEvent,
  } from "../../application/client-store";
</script>

<nav>
  <ul>
    <li><a href="#top">Início</a></li>

    <li>
      <a
        href="#nossos-planos"
        on:click={() => {
          ourPlansEvent.set({});
        }}>Nossos Planos</a
      >
    </li>

    <li>
      <a
        href="#agendar-demo"
        on:click={() => {
          clientRequestOptionSelected.set("requestDemo");
        }}>Agendar Demonstração</a
      >
    </li>
  </ul>
</nav>

<style>
  a {
    transition: transform 0.3s;
    margin: 0.25rem;

    &:hover {
      transform: scale(1.05);
      background-color: rgba(87, 87, 87, 0.4);
      border-radius: 0.75rem;
    }
  }

  nav ul {
    list-style-type: none;
    background-color: #333;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  nav ul li {
    margin: 0 15px;
  }

  nav ul li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 20px;
    text-decoration: none;
    font-weight: bold;
  }
</style>
