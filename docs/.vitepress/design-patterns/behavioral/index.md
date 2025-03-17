# Behavioral Patterns (Padrões Comportamentais)

<div class="category-header behavioral">
  <span class="category-icon">🧠</span>
  <h2>Padrões Comportamentais</h2>
</div>

Os padrões comportamentais se preocupam com algoritmos e a atribuição de responsabilidades entre objetos.

## Propósito

Estes padrões estão especificamente preocupados com a comunicação entre objetos. Eles caracterizam fluxos de controle complexos que são difíceis de seguir em tempo de execução. Eles afastam o foco do fluxo de controle para permitir que você se concentre apenas na maneira como os objetos estão interconectados.

## Padrões nesta categoria

<div class="pattern-grid">
  <PatternCard 
    title="Chain of Responsibility" 
    description="Permite passar solicitações ao longo de uma cadeia de handlers."
    link="/design-patterns/behavioral/chain-of-responsibility"
    category="behavioral"
    icon="⛓️" />
    
  <PatternCard 
    title="Command" 
    description="Transforma uma solicitação em um objeto independente que contém todas as informações sobre a solicitação."
    link="/design-patterns/behavioral/command"
    category="behavioral"
    icon="📝" />
    
  <PatternCard 
    title="Iterator" 
    description="Permite percorrer elementos de uma coleção sem expor sua representação subjacente."
    link="/design-patterns/behavioral/iterator"
    category="behavioral"
    icon="🔄" />
    
  <PatternCard 
    title="Mediator" 
    description="Permite reduzir as dependências caóticas entre objetos."
    link="/design-patterns/behavioral/mediator"
    category="behavioral"
    icon="🔄" />
    
  <PatternCard 
    title="Memento" 
    description="Permite salvar e restaurar o estado anterior de um objeto sem revelar os detalhes de sua implementação."
    link="/design-patterns/behavioral/memento"
    category="behavioral"
    icon="💾" />
    
  <PatternCard 
    title="Observer" 
    description="Permite definir um mecanismo de assinatura para notificar múltiplos objetos sobre quaisquer eventos que aconteçam com o objeto que eles estão observando."
    link="/design-patterns/behavioral/observer"
    category="behavioral"
    icon="👀" />
    
  <PatternCard 
    title="State" 
    description="Permite que um objeto altere seu comportamento quando seu estado interno muda."
    link="/design-patterns/behavioral/state"
    category="behavioral"
    icon="🔄" />
    
  <PatternCard 
    title="Strategy" 
    description="Permite definir uma família de algoritmos, colocar cada um deles em uma classe separada e tornar seus objetos intercambiáveis."
    link="/design-patterns/behavioral/strategy"
    category="behavioral"
    icon="🧩" />
    
  <PatternCard 
    title="Template Method" 
    description="Define o esqueleto de um algoritmo na superclasse mas permite que as subclasses sobrescrevam etapas específicas do algoritmo."
    link="/design-patterns/behavioral/template-method"
    category="behavioral"
    icon="📋" />
    
  <PatternCard 
    title="Visitor" 
    description="Permite separar algoritmos dos objetos nos quais eles operam."
    link="/design-patterns/behavioral/visitor"
    category="behavioral"
    icon="🧳" />
</div>

## Quando usar padrões comportamentais?

- Quando você precisa definir como objetos interagem entre si
- Quando você precisa encapsular algoritmos ou comportamentos
- Quando você precisa definir fluxos de controle complexos
- Quando você precisa permitir que objetos se comuniquem sem conhecer detalhes uns dos outros

## Comparação entre padrões comportamentais

| Padrão | Propósito | Caso de uso típico |
|--------|-----------|-------------------|
| Chain of Responsibility | Passa uma solicitação ao longo de uma cadeia de handlers | Quando você tem vários objetos que podem processar uma solicitação e o handler não é conhecido a priori |
| Command | Encapsula uma solicitação como um objeto | Quando você precisa parametrizar objetos com operações, enfileirar solicitações ou implementar operações que podem ser desfeitas |
| Iterator | Fornece uma maneira de acessar elementos de uma coleção sequencialmente | Quando você precisa percorrer uma coleção sem expor sua estrutura interna |
| Mediator | Reduz dependências caóticas entre objetos | Quando você tem muitos objetos que precisam se comunicar entre si |
| Memento | Captura e externaliza o estado interno de um objeto | Quando você precisa salvar e restaurar o estado de um objeto sem violar seu encapsulamento |
| Observer | Notifica múltiplos objetos sobre eventos | Quando mudanças em um objeto precisam ser refletidas em outros objetos |
| State | Altera o comportamento de um objeto quando seu estado muda | Quando um objeto precisa mudar seu comportamento com base em seu estado interno |
| Strategy | Define uma família de algoritmos intercambiáveis | Quando você precisa usar diferentes variantes de um algoritmo dentro de um objeto |
| Template Method | Define o esqueleto de um algoritmo, permitindo que subclasses sobrescrevam etapas | Quando você tem um algoritmo com partes invariantes e variantes |
| Visitor | Separa algoritmos dos objetos nos quais eles operam | Quando você precisa adicionar operações a uma hierarquia de objetos sem modificá-los |

## Princípios de design relacionados

Os padrões comportamentais geralmente aplicam os seguintes princípios de design:

- **Princípio da Responsabilidade Única (SRP)**: Separando comportamentos em classes específicas
- **Princípio Aberto/Fechado (OCP)**: Permitindo adicionar novos comportamentos sem modificar o código existente
- **Princípio da Inversão de Dependência (DIP)**: Dependendo de abstrações em vez de implementações concretas

## Desafios comuns

Ao implementar padrões comportamentais, você pode enfrentar alguns desafios:

- Aumento da complexidade do código
- Dificuldade em escolher o padrão certo para o problema
- Sobrecarga de desempenho em alguns casos
- Dificuldade em depurar código com fluxos de controle complexos

## Exemplos do mundo real

- **Chain of Responsibility**: Middleware em frameworks web
- **Command**: Implementações de desfazer/refazer em editores de texto
- **Iterator**: Interfaces de coleção em bibliotecas padrão de linguagens
- **Mediator**: Controladores de tráfego aéreo que coordenam voos
- **Memento**: Sistemas de checkpoint em jogos
- **Observer**: Sistemas de eventos em interfaces gráficas
- **State**: Máquinas de estado em processadores de texto
- **Strategy**: Algoritmos de ordenação intercambiáveis
- **Template Method**: Frameworks que definem o fluxo de um processo
- **Visitor**: Operações em estruturas de árvore de sintaxe abstrata em compiladores