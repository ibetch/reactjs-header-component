const editorNav = [
  {
    id: 'logo',
    label: 'Logo',
    variants: [
      {
        id: 'logo-type',
        label: 'Type',
        type: 'radio',
        helperText: 'Max dimensions: 300px x 300px',
        options: [
          {
            id: 'logo-type-text',
            label: 'Text',
            type: 'input'
          },
          {
            id: 'logo-type-image',
            label: 'Image',
            type: 'input-url'
          }
        ]
      },
      {
        id: 'logo-align',
        label: 'Alignment',
        type: 'radio',
        options: [
          {
            id: 'logo-align-left',
            label: 'Left'
          },
          {
            id: 'logo-align-center',
            label: 'Center'
          },
          {
            id: 'logo-align-right',
            label: 'Right'
          }
        ]
      }
    ]
  },
  {
    id: 'mainNav',
    label: 'Main Navigation',
    variants: [
      {
        id: 'mainNav-style',
        label: '',
        type: '',
        helperText: '',
        options: [
          {
            id: 'inline',
            label: 'Inline'
          }
        ]
      }
    ]
  }
];
export default editorNav;
