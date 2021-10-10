// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import developer from './developer'
import articles from './articles'
import writer from './writer'
import technology from './technology'
import technologyListing from './technologyListing'
import technologyReference from './technologyReference'
import project from './project'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    developer,
    articles,
    writer,
    technology,
    technologyListing,
    technologyReference,
    project
  ]),
})
