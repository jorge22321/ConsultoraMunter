export const contact = {
  phone: '986 994 914',
  phoneLink: 'tel:+51986994914',
  whatsapp:
    'https://wa.me/51986994914?text=' +
    encodeURIComponent(
      'Hola, quisiera información sobre los servicios de Consultora Munter & Asociados.',
    ),
  address: 'Of. Mz. C, Lt. 11, A. H. Paul Poblet, Manchay, Pachacámac, Lima.',
  reference: 'Curva de Manchay, a una cuadra de Mi Banco.',
  maps:
    'https://www.google.com/maps/search/?api=1&query=' +
    encodeURIComponent('A.H. Paul Poblet Manchay Pachacamac Lima'),
}
export interface Service {
  id: string
  number: string
  icon: string
  title: string
  shortTitle: string
  description: string
  intro: string
  items: string[]
  groups?: { title: string; items: string[] }[]
  brochure?: string
  image: string
}
export const services: Service[] = [
  {
    id: 'asesoria-legal',
    number: '01',
    icon: 'legal',
    title: 'Asesoría legal',
    shortTitle: 'Derecho y asesoría legal',
    description:
      'Orientación y acompañamiento en asuntos de familia y derecho tributario municipal.',
    intro:
      'Cada situación merece ser escuchada. Te ayudamos a identificar el servicio legal que necesitas y a organizar los siguientes pasos con un especialista.',
    image: '/images/legal.jpg',
    brochure: '/images/servicios-familia.png',
    items: [
      'Derecho de familia',
      'Derecho tributario municipal',
      'Orientación y acompañamiento legal',
    ],
    groups: [
      {
        title: 'Derecho de familia',
        items: [
          'Demanda de alimentos',
          'Demanda de tenencia',
          'Régimen de visitas',
          'Divorcio por causal y por mutuo acuerdo',
          'Unión de hecho',
          'Violencia familiar',
        ],
      },
      {
        title: 'Derecho tributario municipal',
        items: [
          'Reclamaciones ante la administración tributaria',
          'Apelaciones ante el Tribunal Fiscal',
          'Devolución y compensación tributaria',
          'Transferencia de pagos tributarios',
          'Prescripción tributaria',
        ],
      },
    ],
  },
  {
    id: 'arquitectura-ingenieria',
    number: '02',
    icon: 'building',
    title: 'Arquitectura e ingeniería',
    shortTitle: 'Arquitectura e ingeniería',
    description:
      'Soluciones técnicas para planificar, diseñar y dar forma a tus proyectos de construcción.',
    intro:
      'Conectamos tu idea con la planificación técnica que necesita. Contamos con profesionales en distintas ramas de la ingeniería para acompañar tu proyecto.',
    image: '/images/arquitectura.jpg',
    brochure: '/images/servicios-ingenieria.png',
    items: [
      'Diseño de planos de arquitectura y estructuras',
      'Planos de instalaciones sanitarias y eléctricas',
      'Planos de señalización',
      'Fotomontajes arquitectónicos y modelado 3D',
      'Levantamientos topográficos con equipos especializados',
      'Trámites de licencias y regularización de edificaciones',
      'Constancia de posesión',
      'Ploteos A3, A2, A1 y A0',
    ],
  },
  {
    id: 'contabilidad-finanzas',
    number: '03',
    icon: 'finance',
    title: 'Contabilidad y finanzas',
    shortTitle: 'Contabilidad y finanzas',
    description:
      'Asesoría contable, administrativa y financiera para ordenar y gestionar tu negocio.',
    intro:
      'Una gestión organizada te ayuda a tomar decisiones con más claridad. Cuéntanos qué necesita tu negocio para identificar el acompañamiento adecuado.',
    image: '/images/finanzas.jpg',
    items: [
      'Asesoría contable',
      'Administración y gestión del negocio',
      'Orientación financiera',
      'Asesoría contable de importaciones',
    ],
  },
  {
    id: 'comercio-exterior',
    number: '04',
    icon: 'logistics',
    title: 'Comercio exterior y logística',
    shortTitle: 'Comercio exterior y logística',
    description:
      'Acompañamiento en importaciones, documentación, trámites aduaneros y traslado de mercancías.',
    intro:
      'Te orientamos en las distintas etapas de tu importación, desde el seguimiento de proveedores hasta la gestión documental y logística.',
    image: '/images/comercio.jpg',
    brochure: '/images/servicios-importaciones.png',
    items: [
      'Seguimiento de importaciones y lista de proveedores',
      'Gestión documentaria de mercancías importadas',
      'Cotización de fletes aéreos y marítimos',
      'Traslado de mercancía desde el almacén de llegada hasta su destino',
      'Procedimientos y trámites aduaneros',
      'Asesoría contable de importación',
      'Liquidación de documentos de importaciones',
    ],
  },
  {
    id: 'marketing-diseno',
    number: '05',
    icon: 'marketing',
    title: 'Marketing digital y diseño',
    shortTitle: 'Marketing digital y diseño',
    description:
      'Acompañamiento para comunicar tu marca y desarrollar su presencia en el entorno digital.',
    intro:
      'Tu negocio también necesita una comunicación que lo represente. Conversamos contigo para identificar tus necesidades de marketing digital y diseño gráfico.',
    image: '/images/marketing.jpg',
    items: [
      'Asesoría en marketing digital',
      'Diseño gráfico',
      'Comunicación visual para tu negocio',
    ],
  },
]
export const steps = [
  {
    title: 'Te escuchamos',
    text: 'Conocemos tu situación, tus objetivos y lo que necesitas resolver.',
  },
  {
    title: 'Definimos el camino',
    text: 'Identificamos el área y el especialista adecuados para tu consulta.',
  },
  {
    title: 'Te acompañamos',
    text: 'Coordinamos contigo el alcance del servicio y los siguientes pasos.',
  },
]
