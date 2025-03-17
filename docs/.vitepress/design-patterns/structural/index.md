# Structural Patterns (Padrões Estruturais)

<div class="category-header structural">
  <span class="category-icon">🔌</span>
  <h2>Padrões Estruturais</h2>
</div>

Os padrões estruturais explicam como montar objetos e classes em estruturas maiores, mantendo essas estruturas flexíveis e eficientes.

## Propósito

Estes padrões se preocupam com a composição de classes e objetos. Eles usam herança para compor interfaces ou implementações, e descrevem maneiras de compor objetos para obter novas funcionalidades.

## Padrões nesta categoria

<div class="pattern-grid">
  <PatternCard 
    title="Adapter" 
    description="Permite que objetos com interfaces incompatíveis colaborem entre si."
    link="/design-patterns/structural/adapter"
    category="structural"
    icon="🔌" />
    
  <PatternCard 
    title="Bridge" 
    description="Permite que você divida uma classe grande ou um conjunto de classes intimamente ligadas em duas hierarquias separadas—abstração e implementação."
    link="/design-patterns/structural/bridge"
    category="structural"
    icon="🌉" />
    
  <PatternCard 
    title="Composite" 
    description="Permite que você componha objetos em estruturas de árvore e trabalhe com essas estruturas como se fossem objetos individuais."
    link="/design-patterns/structural/composite"
    category="structural"
    icon="🌲" />
    
  <PatternCard 
    title="Decorator" 
    description="Permite adicionar novos comportamentos a objetos colocando-os dentro de invólucros de objetos que contêm os comportamentos."
    link="/design-patterns/structural/decorator"
    category="structural"
    icon="🎀" />
    
  <PatternCard 
    title="Facade" 
    description="Fornece uma interface simplificada para uma biblioteca, um framework ou qualquer conjunto complexo de classes."
    link="/design-patterns/structural/facade"
    category="structural"
    icon="🏢" />
    
  <PatternCard 
    title="Flyweight" 
    description="Permite que você coloque mais objetos na quantidade disponível de RAM compartilhando partes comuns do estado entre múltiplos objetos."
    link="/design-patterns/structural/flyweight"
    category="structural"
    icon="🪶" />
    
  <PatternCard 
    title="Proxy" 
    description="Permite fornecer um substituto ou um espaço reservado para outro objeto. Um proxy controla o acesso ao objeto original."
    link="/design-patterns/structural/proxy"
    category="structural"
    icon="🔐" />
</div>

## Quando usar padrões estruturais?

- Quando você precisa adaptar interfaces incompatíveis
- Quando você precisa simplificar interfaces complexas
- Quando você precisa adicionar funcionalidades a objetos sem modificar seu código
- Quando você precisa otimizar o uso de memória
- Quando você precisa controlar o acesso a objetos

## Comparação entre padrões estruturais

| Padrão | Propósito | Caso de uso típico |
|--------|-----------|-------------------|
| Adapter | Faz interfaces incompatíveis trabalharem juntas | Quando você precisa usar uma classe existente com uma interface incompatível |
| Bridge | Separa uma abstração de sua implementação | Quando você quer evitar um vínculo permanente entre uma abstração e sua implementação |
| Composite | Trata objetos individuais e composições de objetos uniformemente | Quando você precisa trabalhar com estruturas de árvore de objetos |
| Decorator | Adiciona responsabilidades a objetos dinamicamente | Quando você precisa adicionar comportamentos a objetos sem afetar outros objetos |
| Facade | Fornece uma interface simplificada para um subsistema complexo | Quando você precisa fornecer uma interface simples para um conjunto complexo de classes |
| Flyweight | Compartilha estado comum entre múltiplos objetos | Quando você precisa ter um grande número de objetos semelhantes |
| Proxy | Representa um objeto que não pode ou não deve ser acessado diretamente | Quando você precisa controlar o acesso a um objeto |

## Princípios de design relacionados

Os padrões estruturais geralmente aplicam os seguintes princípios de design:

- **Princípio da Responsabilidade Única (SRP)**: Separando responsabilidades em diferentes classes
- **Princípio Aberto/Fechado (OCP)**: Permitindo estender funcionalidades sem modificar o código existente
- **Princípio da Segregação de Interface (ISP)**: Fornecendo interfaces específicas para diferentes clientes

## Desafios comuns

Ao implementar padrões estruturais, você pode enfrentar alguns desafios:

- Aumento da complexidade do código
- Dificuldade em escolher o padrão certo para o problema
- Sobrecarga de desempenho em alguns casos
- Dificuldade em depurar código que usa muitos níveis de indireção

## Exemplos do mundo real

- **Adapter**: Bibliotecas de compatibilidade entre diferentes frameworks
- **Bridge**: Drivers de dispositivos que separam a interface do sistema operacional da implementação do hardware
- **Composite**: Interfaces gráficas de usuário que tratam componentes simples e compostos de maneira uniforme
- **Decorator**: Streams de I/O em Java que adicionam funcionalidades como buffering ou compressão
- **Facade**: Bibliotecas de API que simplificam o acesso a subsistemas complexos
- **Flyweight**: Editores de texto que compartilham dados de formatação entre caracteres
- **Proxy**: Frameworks de ORM que fornecem proxies para objetos de banco de dados