export default {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'bannerImage',
            title: 'Banner Image',
            type: 'image',
            options: {
                hotspot: true
            },
            fields: [
                {
                    name: 'caption',
                    title: 'Caption',
                    type: 'slug',
                    options: {
                        isHighlighted: true,
                        source: 'title',
                        slugify: input => input
                            .toLowerCase()
                            .concat(' profile picture')
                    },
                    description: 'this will also be used for alt text',
                    validation: Rule => Rule.required().warning('A caption is required')
                },
            ]
        },
        {
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [
                {
                    type: 'block'
                }
            ]
        },
        {
            name: 'technologies',
            title: 'Technologies',
            type: 'array',
            of: [{type: 'technologyReference'}]
        },
        {
            name: 'collaborators',
            title: 'Collaborators',
            type: 'array',
            of: [{type: 'writer'}]
        },
    ]
}
