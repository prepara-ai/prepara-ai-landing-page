<script lang="ts">
  import { onMount } from "svelte";

  onMount(() => {
    const link = document.createElement("link");
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;

    script.onload = () => {
      window.Calendly.initBadgeWidget({
        url: "https://calendly.com/preparaai-contato/apresentacao-da-plataforma",
        text: "Agende uma apresentação",
        color: "#00a2ff",
        textColor: "#ffffff",
      });
    };
    document.body.appendChild(script);
  });
</script>
