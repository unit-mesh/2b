import {
	BuiltInFunc,
	ChangeForm,
	DefinedVariable,
	FacetType,
	OutputForm,
	PromptAction, SourceType
} from "@/types/custom-action.type";


const ToolbarMenu: PromptAction[] = [
	{
		sourceType: SourceType.BEFORE_CURSOR,
		name: 'Continue writing',
		i18Name: true,
		template: `You are an assistant helping a user write a document. Output how the document continues, no more than 3 sentences. ###{{${DefinedVariable.BEFORE_CURSOR}}}###`,
		facetType: FacetType.TOOLBAR_MENU,
		outputForm: OutputForm.STREAMING,
	},
	{
		sourceType: SourceType.BEFORE_CURSOR,
		name: 'Help Me Write',
		i18Name: true,
		template: ` You are an assistant helping a user write more content in a document based on a prompt. Output in markdown format. ###{{${DefinedVariable.BEFORE_CURSOR}}}###`,
		facetType: FacetType.TOOLBAR_MENU,
		outputForm: OutputForm.STREAMING,
	},
	{
		sourceType: SourceType.BEFORE_CURSOR,
		name: 'Spelling and Grammar',
		i18Name: true,
		template: `You are an assistant helping a user to check spelling and grammar. Output in markdown format. ###{{${DefinedVariable.BEFORE_CURSOR}}}###`,
		facetType: FacetType.TOOLBAR_MENU,
		outputForm: OutputForm.STREAMING,
	},
];

const BubbleMenu: PromptAction[] = [
	{
		sourceType: SourceType.SELECTION,
		name: 'Polish',
		i18Name: true,
		template: `You are an assistant helping to polish sentence. Output in markdown format. \n ###{{${DefinedVariable.SELECTION}}}###`,
		facetType: FacetType.BUBBLE_MENU,
		outputForm: OutputForm.STREAMING,
	},
	{
		sourceType: SourceType.SELECTION,
		name: 'Simplify Content',
		i18Name: true,
		template: `You are an assistant helping to simplify content. Output in markdown format. \n ###{{${DefinedVariable.SELECTION}}}###`,
		facetType: FacetType.BUBBLE_MENU,
		outputForm: OutputForm.STREAMING,
		changeForm: ChangeForm.DIFF,
	},
	{
		sourceType: SourceType.SELECTION,
		name: 'Similar Chunk',
		i18Name: true,
		template: `{{${DefinedVariable.SELECTION}}}`,
		builtinFunction: BuiltInFunc.SIMILAR_CHUNKS,
		facetType: FacetType.BUBBLE_MENU,
		outputForm: OutputForm.STREAMING,
	},
	{
		sourceType: SourceType.SELECTION,
		name: 'Translate',
		i18Name: true,
		template: `You are an assistant helping to translate a sentence. Output in markdown format. \n ###{{${DefinedVariable.SELECTION}}}###`,
		facetType: FacetType.BUBBLE_MENU,
		outputForm: OutputForm.STREAMING,
	}
];

const SlashCommands: PromptAction[] = [
	{
		sourceType: SourceType.SELECTION,
		name: 'Summarize',
		i18Name: true,
		template: `You are an assistant helping to summarize a document. Output in markdown format. \n ###{{${DefinedVariable.SELECTION}}}###`,
		facetType: FacetType.SLASH_COMMAND,
		outputForm: OutputForm.STREAMING
	}
]

const PrebuildPrompts: PromptAction[] = [
	ToolbarMenu,
	BubbleMenu,
	SlashCommands
].flat();

export default PrebuildPrompts;