export default {
    name: 'developer',
    title: 'Developer',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: Rule => Rule.required().min(2).max(100).warning('A name is required')
        },
        {
            name: 'role',
            title: 'Role',
            type: 'string',
            validation: Rule => Rule.required().min(2).max(100).warning('A role is required')
        },
        {
            name: 'yearsEmployed',
            title: 'Years Employed',
            type: 'number',
            validation: Rule => Rule.required().warning('Years with company is required')
        },
        {
            name: 'technologies',
            title: 'Technologies',
            type: 'array',
            of: [{type: 'technologyReference'}]
        },
        {
            name: 'profilePicture',
            title: 'Profile Picture',
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
                        source: 'name',
                        slugify: input => input
                            .toLowerCase()
                            .concat(' preview image')
                    },
                    description: 'this will also be used for alt text',
                    validation: Rule => Rule.required().warning('A caption is required')
                },
            ]
        },
        {
            name: 'aboutDeveloper',
            title: 'About Me',
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
                source: 'name',
                maxLength: 200,
            },
            validation: Rule => Rule.required().warning('A slug is required')
        }
    ]
}
