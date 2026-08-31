export default {
  name: 'product',
  title: 'Produk Kerajinan',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nama Produk',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'category',
      title: 'Kategori Produk',
      type: 'string',
      options: {
        list: [
          { title: 'Pull Handle', value: 'pull handle' },
          { title: 'Ring Handle', value: 'ring handle' },
          { title: 'Accessories', value: 'accessories' }
        ]
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'image',
      title: 'Gambar Produk',
      type: 'image',
      options: { hotspot: true },
      validation: Rule => Rule.required()
    }
  ]
}