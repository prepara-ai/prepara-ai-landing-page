<script lang="ts">
  import { trackClickOnButton } from "../../scripts/analytics";

  export let isDisabled: boolean = false;
  export let text: string;
  export let color: "primary" | "success" | "error";
  export let onClick: () => void;
  export let trackingDetails: {
    name: string;
    method?: string;
    cta_type?: string;
    cta_text?: string;
    request_type?: string;
  } | null;
</script>

<button
  type="button"
  class="form-button {color}"
  disabled={isDisabled}
  on:click={() => {
    onClick();
    if (trackingDetails) {
      const { name, method, cta_type, cta_text, request_type } =
        trackingDetails;
      trackClickOnButton(name, method, cta_type, cta_text, request_type);
    }
  }}>{@html text}</button
>

<style>
  .form-button {
    font-weight: bold;
    transition: transform 0.3s;
    font-size: 1.15rem;

    &:hover {
      transform: scale(1.05);
    }
  }

  .form-button:disabled {
    opacity: 0.5;
    pointer-events: none;
  }

  .success {
    background-color: rgba(0, 133, 120, 1);
    color: #fff;

    &:hover {
      background-color: rgba(0, 141, 135, 1);
    }
  }
</style>
