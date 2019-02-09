import React from 'react'
import renderer from 'react-test-renderer'

import ProjectPreviewGrid from '../project-preview-grid'

describe('ProjectPreviewGrid', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <ProjectPreviewGrid
          title="Latest projects"
          nodes={projectNodes}
          browseMoreHref="/projects/"
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
