export default {
    name: 'technologyListing',
    title: 'Technology Listing',
    type: 'object',
    fields: [
        {
            name: 'technologyBadge',
            title: 'Technology Badge',
            type: 'reference',
            to: [{type: 'technologyReference'}]
        },
    ],
    preview: {
        select: {
            title: 'technologyBadge'
        }
    }
}