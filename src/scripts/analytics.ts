const getPageContext = () => ({
  page_location: window.location.href,
  page_path: window.location.pathname,
  page_title: document.title,
});

const trackEvent = (name: string, params: Record<string, unknown> = {}) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", name, {
      ...getPageContext(),
      ...params,
    });
  }
};

const trackPageView = () => {
  trackEvent("page_view");
};

const trackClickOnButton = (
  eventName: string,
  method?: string,
  cta_type?: string,
  cta_text?: string,
  request_type?: string
) => {
  trackEvent(eventName, {
    ...(method ? { method } : {}),
    ...(cta_type ? { cta_type } : {}),
    ...(cta_text ? { cta_text } : {}),
    ...(request_type ? { request_type } : {}),
  });
};

export { trackClickOnButton, trackPageView };
