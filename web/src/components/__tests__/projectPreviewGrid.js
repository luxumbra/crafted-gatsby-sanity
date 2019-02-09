import React from 'react'
import renderer from 'react-test-renderer'

import ProjectPreviewGrid from '../project-preview-grid'
import styles from '../project-preview-grid.module.css'

describe('ProjectPreviewGrid', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <ProjectPreviewGrid
          title="Latest projects"
          browseMoreHref="/projects/"
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
