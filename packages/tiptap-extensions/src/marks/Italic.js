import { Mark } from 'tiptap'
import { toggleMark, markInputRule } from 'tiptap-commands'

export default class ItalicMark extends Mark {

	get name() {
		return 'italic'
	}

	get schema() {
		return {
			parseDOM: [
				{ tag: 'i' },
				{ tag: 'em' },
				{ style: 'font-style=italic' },
			],
			toDOM: () => ['em', 0],
		}
	}

	keys({ type }) {
		return {
			'Mod-i': toggleMark(type),
		}
	}

	command({ type }) {
		return toggleMark(type)
	}

	inputRules({ type }) {
		return [
			markInputRule(/(?:^|[^\*_])(?:\*|_)([^\*_]+)(?:\*|_)$/, type),
		]
	}

}
