export default {
  items: [
    {
      name: 'Dashboard',
      url: '/',
      icon: 'grid1x2-fill'
    },
    {
      name: 'Test Masif',
      url: '/base',
      icon: 'bookmarks-fill',
      children: [
        {
          name: 'Input Hasil Test',
          url: '/base/breadcrumbs',
          icon: 'icon-puzzle'
        },
        {
          name: 'Lihat Hasil Test',
          url: '/base/cards',
          icon: 'icon-puzzle'
        }
      ]
    },
    {
      name: 'Laporan Kasus',
      url: '/buttons',
      icon: 'kanban-fill',
      children: [
        {
          name: 'Buat Laporan Kasus',
          url: '/base/breadcrumbs',
          icon: 'icon-puzzle'
        },
        {
          name: 'List Kasus',
          url: '/base/cards',
          icon: 'icon-puzzle'
        }
      ]
    },
    {
      name: 'Kelola Pengguna',
      url: '/icons',
      icon: 'people-fill'
    },
    {
      name: 'Bantuan',
      url: '/icons',
      icon: 'question-circle-fill'
    }
  ]
}
