const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
);

const disclosureAnimations = new WeakMap<HTMLElement, Animation>();
const dialogTriggers = new WeakMap<HTMLDialogElement, HTMLButtonElement>();
const initializedDialogs = new WeakSet<HTMLDialogElement>();

function playSound(source: string) {
  const sound = new Audio(source);
  void sound.play().catch(() => {
    // Sound is an enhancement; interaction must still work if playback fails.
  });
}

function animateDisclosure(
  content: HTMLElement,
  opening: boolean,
  trigger: HTMLButtonElement,
) {
  disclosureAnimations.get(content)?.cancel();

  if (opening) {
    content.hidden = false;
  }

  if (prefersReducedMotion.matches) {
    content.hidden = !opening;
    return;
  }

  const animation = content.animate(
    opening
      ? [
          { opacity: 0, transform: "translateY(-0.5rem)" },
          { opacity: 1, transform: "translateY(0)" },
        ]
      : [
          { opacity: 1, transform: "translateY(0)" },
          { opacity: 0, transform: "translateY(-0.5rem)" },
        ],
    { duration: 180, easing: "ease-out" },
  );

  disclosureAnimations.set(content, animation);
  void animation.finished
    .then(() => {
      if (disclosureAnimations.get(content) !== animation) return;
      if (trigger.getAttribute("aria-expanded") === "false") {
        content.hidden = true;
      }
      disclosureAnimations.delete(content);
    })
    .catch(() => {
      // A new toggle cancels the previous animation.
    });
}

document.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof Element)) return;

  const disclosure = target.closest<HTMLButtonElement>(
    "[data-disclosure-button]",
  );
  if (disclosure) {
    const contentId = disclosure.getAttribute("aria-controls");
    const content = contentId
      ? document.getElementById(contentId)
      : undefined;
    const arrow = disclosure.querySelector<HTMLElement>(
      "[data-disclosure-arrow]",
    );

    if (content) {
      const opening = disclosure.getAttribute("aria-expanded") !== "true";
      disclosure.setAttribute("aria-expanded", String(opening));
      arrow?.classList.toggle("rotate-90", opening);
      animateDisclosure(content, opening, disclosure);
      playSound("/button.mp3");
    }
    return;
  }

  const dialogButton = target.closest<HTMLButtonElement>("[data-dialog-open]");
  if (dialogButton) {
    const dialogId = dialogButton.dataset.dialogOpen;
    const dialog = dialogId ? document.getElementById(dialogId) : undefined;

    if (dialog instanceof HTMLDialogElement) {
      dialogTriggers.set(dialog, dialogButton);
      playSound("/button-heavy.mp3");
      dialog.showModal();
    }
    return;
  }

  if (target.closest("[data-dialog-close]")) {
    playSound("/button-heavy.mp3");
    return;
  }

  const soundTarget = target.closest<HTMLElement>("[data-sound]");
  if (soundTarget) {
    const soundSource =
      soundTarget.dataset.sound === "light"
        ? "/button.mp3"
        : soundTarget.dataset.sound === "paper"
          ? "/paper.mp3"
          : "/button-heavy.mp3";
    playSound(soundSource);
  }
});

function initializeDialogs() {
  document
    .querySelectorAll<HTMLDialogElement>("[data-portfolio-dialog]")
    .forEach((dialog) => {
      if (initializedDialogs.has(dialog)) return;
      initializedDialogs.add(dialog);

      dialog.addEventListener("close", () => {
        dialogTriggers.get(dialog)?.focus();
        dialogTriggers.delete(dialog);
      });
    });
}

initializeDialogs();
document.addEventListener("astro:page-load", initializeDialogs);
