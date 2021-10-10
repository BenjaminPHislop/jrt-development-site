export default {
    name: 'article',
    title: 'Article',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: Rule => Rule.required().min(2).max(100).warning('A title is required')
        },
        {
            name: 'headline',
            title: 'Headline',
            type: 'string',
            validation: Rule => Rule.required().min(2).max(100).warning('A headline is required')
        },
        {
            title: 'Publish date',
            name: 'publishDate',
            type: 'date',
            options: {
              dateFormat: 'MM-DD-YYYY',
              calendarTodayLabel: 'Today'
            },
            validation: Rule => Rule.required('A Date is required')
        },
        {
            name: 'technologies',
            title: 'Technologies',
            type: 'array',
            of: [{type: 'technologyReference'}]
        },
        {
            name: 'writer',
            title: 'Writer',
            type: 'writer',
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
                    name: 'altText',
                    title: 'alt text',
                    type: 'string',
                    options: {
                        isHighlighted: true
                    },
                    validation: Rule => Rule.required().warning('Alt text is required')
                }
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
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'headline',
                maxLength: 200,
            },
            validation: Rule => Rule.required().warning('A slug is required')
        }
    ]
}
