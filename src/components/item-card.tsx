import React from "react";
import Modal from "react-modal";

interface ItemCardProps {
  desc: string;
  itemKey: string;
}

export default function ItemCard({ desc, itemKey }: ItemCardProps) {
  const dialogId = `dialog-${itemKey}`;

  function playSound() {
    const snd = new Audio("button-heavy.mp3");
    snd.play();
  }

  function openModal() {
    console.log("Opening modal for:", dialogId);
    const dialog = document.getElementById(dialogId);
    if (!dialog) return;
    playSound();
    dialog.showModal();
  }

  return (
    <div>
      <button type="button" className="nes-btn" onClick={openModal}>
        See details
      </button>
      <dialog
        className="nes-dialog absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50"
        id={dialogId}
      >
        <form method="dialog" className="m-0">
          <p className="title">Description</p>
          <p>{desc}</p>
          <button className="nes-btn" onClick={playSound}>
            Cool
          </button>
        </form>
      </dialog>
    </div>
  );
}
