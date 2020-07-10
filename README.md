# programmer-app hierarchy
```sh
| index.html
	|
	| app.module
		|
		| toolbar.component
		| home.module
			|
			| features-card.componet
			| home-section.component: {}, //Is a div with individual sections, explaining above feature.
			| category.component: {} //all the coding category will be displayed here, an array of category-card component - not needed I guess
			| category-card.component: {}  // individual category listed as a list card. On selection, we go to content.module
		|
		| content.module
			|
			| filter-section.component:{},// filter section from where content-card array can be shuffled and filtered.
			| content-master.component : {} // parent component. contains content, editor component.
			| content-view.component: {} // is the area, where the questions and solutions will be present(array of content-card.component).
			| editor-view.component:{} // appears after selecting content-card. Doubt
			| content-card.component: {} // individual questions displayed as list cards.
		|
		| user.module
			|
			| user.component
		|
		| payment.module
		|
		| footer.component
```
