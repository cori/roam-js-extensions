import { getUidsFromButton, getTreeByBlockUid } from "roam-client";
import { renderTallyCounter } from "../components/TallyCounter";
import { createButtonObserver, runExtension } from "../entry-helpers";

runExtension("tally", () => {
  createButtonObserver({
    shortcut: "tally",
    attribute: "tally-button",
    render: (b: HTMLButtonElement) => {
      const { blockUid } = getUidsFromButton(b);
      const tree = getTreeByBlockUid(blockUid);
      const initialValueNode = tree.children.find(
        (c) => !isNaN(parseInt(c.text))
      );
      const initialValue = initialValueNode
        ? parseInt(initialValueNode.text)
        : 0;
      renderTallyCounter(initialValue, b.parentElement);
    },
  });
});
