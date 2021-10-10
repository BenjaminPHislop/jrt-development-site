export default {
    name: 'technology',
    title: 'Technology',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: Rule => Rule.required().min(2).max(100).warning('A name is required')
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 20,
            },
            validation: Rule => Rule.required().warning('A slug is required')
        },
        {
            name: 'techImage',
            title: 'Technology Image',
            type: 'image',
            options: {
              hotspot: true
            },
            fields: [
                {
                    name: 'altText',
                    title: 'Alt Text',
                    type: 'slug',
                    options: {
                        isHighlighted: true,
                        source: 'name',
                        slugify: input => input
                            .toLowerCase()
                            .concat(' logo')
                    },
                    description: 'this will also be used for alt text',
                    validation: Rule => Rule.required().warning('Alt text is required')
                },
            ]
        },
        {
            name: 'documentation',
            title: 'Documentation',
            type: 'url',
            validation: Rule => Rule.required().warning('A url is required')
        },
    ]
}