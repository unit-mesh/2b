import { Commands, Extension } from "@tiptap/react";
import { Editor } from "@tiptap/core";
import { Transaction } from "prosemirror-state";
import {
  ChangeForm,
  FacetType,
  PromptAction,
} from "@/types/custom-action.type";
import { PromptsManager } from "@/prompts/prompts-manager";
import { Range } from "@tiptap/core";
import { ActionExecutor } from "@/components/editor/action/ActionExecutor";

declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    variable: {
      variable: () => ReturnType;
    };

    getSelectedText: {
      getSelectedText: () => string;
    };

    getAiActions: {
      getAiActions: (facet: FacetType) => PromptAction[];
    };

    runAiAction: {
      runAiAction: (action: PromptAction) => ReturnType;
    };
  }
}

export const CommandFunctions = Extension.create({
  name: "commandFunctions",
  // @ts-ignore
  addCommands: () => {
    return {
      // for examples: $selection, $beforeCursor
      variable: (variableName: string, variableValue: string) => () => {
        console.log("variable", variableName, variableValue);
      },
      getSelectedText:
        () =>
        ({ editor }: { editor: Editor }) => {
          if (!editor.state) return null;

          const { from, to, empty } = editor.state.selection;

          if (empty) return null;

          return editor.state.doc.textBetween(from, to, " ");
        },
      callLlm:
        (action: PromptAction) =>
        ({ tr, commands }: { tr: Transaction; commands: Commands }) => {
          // TODO: @phodal convert action to request
          // TODO: @genffy add LLM request type
          // do execute action
        },
      getAiActions:
        (facet: FacetType) =>
        ({ editor }: { editor: Editor }) => {
          return PromptsManager.getInstance().get(facet);
        },
      runAiAction:
        (action: PromptAction) =>
        ({ editor }: { editor: Editor }) => {
          // call LLM
          console.log("executeAction", action);
        },
      setBackgroundContext:
        (context: string) =>
        ({ editor }: { editor: Editor }) => {
          PromptsManager.getInstance().saveBackgroundContext(context);
        },
    };
  },
});
