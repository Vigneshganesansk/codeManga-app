# programmer-app hierarchy
index.html{
    app.module:{
        toolbar.component : {},// lists all the sections, and sidebar as a responsive content.
        home.module: {
            features-card.component : {}, //what all the does and could do.
            home-section.component: {}, //Is a div with individual sections, explaining above feature.
            category.component: { //all the coding category will be displayed here, an array of category-card component
                category-card.component: {}  // individual category listed as a list card. On selection, we go to content.module
            }
        },
        content.module: {
             filter-section.component:{},// filter section from where content-card array can be shuffled and filtered.
            content.component : { // is the area, where the questions and solutions will be present(array of content-card.component).
                content-card.component:{},// individual questions displayed as list cards.
            },
            editor-view.component:{} // appears after selecting content-card. Doubt
           
        },
        user.module:{
            user.component: {} // displays user related data.
        },
        payment.module: {}, // ...
        footer.component: {} // :)
    }
}