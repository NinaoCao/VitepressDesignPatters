# Creational Patterns (Padrões de Criação)

<div class="category-header creational">
  <span class="category-icon">🏗️</span>
  <h2>Padrões de Criação</h2>
</div>

Os padrões de criação fornecem mecanismos de criação de objetos que aumentam a flexibilidade e a reutilização de código.

## Propósito

Estes padrões lidam com os mecanismos de criação de objetos, tentando criar objetos de maneira adequada à situação. A forma básica de criação de objetos pode resultar em problemas de design ou adicionar complexidade ao design. Os padrões de criação resolvem este problema controlando a criação de objetos.

## Padrões nesta categoria

<div class="pattern-grid">
  <PatternCard 
    title="Factory Method" 
    description="Define uma interface para criar um objeto, mas permite que as subclasses alterem o tipo de objetos que serão criados."
    link="/design-patterns/creational/factory-method"
    category="creational"
    icon="🏭" />
    
  <PatternCard 
    title="Abstract Factory" 
    description="Permite que você produza famílias de objetos relacionados sem especificar suas classes concretas."
    link="/design-patterns/creational/abstract-factory"
    category="creational"
    icon="🏢" />
    
  <PatternCard 
    title="Builder" 
    description="Permite construir objetos complexos passo a passo, permitindo produzir diferentes tipos e representações de um objeto."
    link="/design-patterns/creational/builder"
    category="creational"
    icon="👷" />
    
  <PatternCard 
    title="Prototype" 
    description="Permite copiar objetos existentes sem fazer seu código depender de suas classes."
    link="/design-patterns/creational/prototype"
    category="creational"
    icon="🧬" />
    
  <PatternCard 
    title="Singleton" 
    description="Garante que uma classe tenha apenas uma instância, enquanto fornece um ponto de acesso global para essa instância."
    link="/design-patterns/creational/singleton"
    category="creational"
    icon="🔒" />
</div>

## Quando usar padrões criacionais?

- Quando a criação de objetos se torna complexa
- Quando você precisa de flexibilidade na criação de objetos
- Quando você quer desacoplar o código que usa os objetos do código que os cria
- Quando você precisa controlar o processo de criação de objetos

## Comparação entre padrões criacionais

| Padrão | Propósito | Caso de uso típico |
|--------|-----------|-------------------|
| Factory Method | Delega a instanciação para subclasses | Quando não se sabe de antemão quais tipos de objetos o código vai precisar criar |
| Abstract Factory | Cria famílias de objetos relacionados | Quando o sistema precisa ser independente de como seus produtos são criados |
| Builder | Constrói objetos complexos passo a passo | Quando um objeto tem muitos parâmetros de construção, alguns opcionais |
| Prototype | Cria novos objetos a partir de objetos existentes | Quando a criação de um objeto é custosa ou complexa |
| Singleton | Garante uma única instância de uma classe | Quando exatamente uma instância de uma classe é necessária |

## Princípios de design relacionados

Os padrões criacionais geralmente aplicam os seguintes princípios de design:

- **Princípio da Responsabilidade Única (SRP)**: Separando a criação de objetos em classes específicas
- **Princípio Aberto/Fechado (OCP)**: Permitindo adicionar novos tipos de objetos sem modificar o código existente
- **Princípio da Inversão de Dependência (DIP)**: Dependendo de abstrações em vez de implementações concretas

## Desafios comuns

Ao implementar padrões criacionais, você pode enfrentar alguns desafios:

- Aumento da complexidade do código
- Dificuldade em escolher o padrão certo para o problema
- Sobrecarga de desempenho em alguns casos
- Dificuldade em testar código que usa Singleton

## Exemplos do mundo real

- **Factory Method**: Frameworks de UI que permitem criar elementos específicos da plataforma
- **Abstract Factory**: Bibliotecas de temas que criam conjuntos de elementos de UI coordenados
- **Builder**: Bibliotecas de construção de consultas SQL
- **Prototype**: Funcionalidade de clonagem em editores gráficos
- **Singleton**: Gerenciadores de conexão de banco de dados, pools de threads