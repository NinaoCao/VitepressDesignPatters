import { defineConfig } from "vitepress"

export default defineConfig({
  title: "Design Patterns",
  description: "Guia completo sobre Design Patterns",
  lang: "pt-BR",
  lastUpdated: true,

  head: [
    ["link", { rel: "icon", href: "/logo.svg" }],
    ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
    ["link", { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" }],
    [
      "link",
      { href: "https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap", rel: "stylesheet" },
    ],
  ],

  // Forçar tema escuro
  appearance: "dark",

  themeConfig: {
    logo: "/logo.svg",
    siteTitle: "Design Patterns",

    nav: [
      { text: "Home", link: "/" },
      { text: "Design Patterns", link: "/design-patterns/" },
      { text: "Creational", link: "/design-patterns/creational/" },
      { text: "Structural", link: "/design-patterns/structural/" },
      { text: "Behavioral", link: "/design-patterns/behavioral/" },
    ],

    sidebar: {
      "/design-patterns/": [
        {
          text: "Introdução",
          link: "/design-patterns/",
        },
        {
          text: "Creational Patterns",
          collapsed: false,
          items: [
            { text: "Visão Geral", link: "/design-patterns/creational/" },
            { text: "Factory Method", link: "/design-patterns/creational/factory-method" },
            { text: "Abstract Factory", link: "/design-patterns/creational/abstract-factory" },
            { text: "Builder", link: "/design-patterns/creational/builder" },
            { text: "Prototype", link: "/design-patterns/creational/prototype" },
            { text: "Singleton", link: "/design-patterns/creational/singleton" },
          ],
        },
        {
          text: "Structural Patterns",
          collapsed: false,
          items: [
            { text: "Visão Geral", link: "/design-patterns/structural/" },
            { text: "Adapter", link: "/design-patterns/structural/adapter" },
            { text: "Bridge", link: "/design-patterns/structural/bridge" },
            { text: "Composite", link: "/design-patterns/structural/composite" },
            { text: "Decorator", link: "/design-patterns/structural/decorator" },
            { text: "Facade", link: "/design-patterns/structural/facade" },
            { text: "Flyweight", link: "/design-patterns/structural/flyweight" },
            { text: "Proxy", link: "/design-patterns/structural/proxy" },
          ],
        },
        {
          text: "Behavioral Patterns",
          collapsed: false,
          items: [
            { text: "Visão Geral", link: "/design-patterns/behavioral/" },
            { text: "Chain of Responsibility", link: "/design-patterns/behavioral/chain-of-responsibility" },
            { text: "Command", link: "/design-patterns/behavioral/command" },
            { text: "Iterator", link: "/design-patterns/behavioral/iterator" },
            { text: "Mediator", link: "/design-patterns/behavioral/mediator" },
            { text: "Memento", link: "/design-patterns/behavioral/memento" },
            { text: "Observer", link: "/design-patterns/behavioral/observer" },
            { text: "State", link: "/design-patterns/behavioral/state" },
            { text: "Strategy", link: "/design-patterns/behavioral/strategy" },
            { text: "Template Method", link: "/design-patterns/behavioral/template-method" },
            { text: "Visitor", link: "/design-patterns/behavioral/visitor" },
          ],
        },
      ],
    },

    socialLinks: [{ icon: "github", link: "https://github.com/seu-usuario/design-patterns" }],

    footer: {
      message: "Desenvolvido com VitePress",
      copyright: "Copyright © 2023-presente",
    },

    search: {
      provider: "local",
    },

    outline: {
      level: [2, 3],
      label: "Nesta página",
    },

    docFooter: {
      prev: "Página anterior",
      next: "Próxima página",
    },
  },
})

