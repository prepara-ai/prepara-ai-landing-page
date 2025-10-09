import { writable } from "svelte/store";

type RequestOption = "requestPlan" | "requestDemo" | "requestFreeTrial";

type PlanType = "individual" | "essential" | "advanced" | "premium" | "custom";

const clientRequestOptionSelected = writable<RequestOption | null>(null);

const ourPlansEvent = writable({});

const selectedPlan = writable<PlanType | null>(null);

export {
  clientRequestOptionSelected,
  ourPlansEvent,
  selectedPlan,
  type PlanType,
  type RequestOption,
};
