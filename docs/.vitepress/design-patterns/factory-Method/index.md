# Factory Method

<div class="category-header creational">
  <span class="category-icon">🏭</span>
  <h2>Factory Method</h2>
</div>

## Propósito

O Factory Method é um padrão de design criacional que fornece uma interface para criar objetos em uma superclasse, mas permite que as subclasses alterem o tipo de objetos que serão criados.

## Problema

Imagine que você está criando uma aplicação de gerenciamento de logística. A primeira versão da sua aplicação só pode lidar com o transporte por caminhões, então a maior parte do seu código fica dentro da classe `Caminhao`.

Depois de um tempo, sua aplicação se torna bastante popular. Todos os dias você recebe dezenas de solicitações de empresas de transporte marítimo para incorporar a logística marítima na aplicação.

![Problema do Factory Method](/images/patterns/creational/factory-method-problem.png)

Adicionar uma nova classe de transporte à aplicação exigiria mudanças em todo o código base. Além disso, se mais tarde você decidir adicionar outro tipo de transporte à aplicação, provavelmente precisará fazer todas essas mudanças novamente.

## Solução

O padrão Factory Method sugere que você substitua chamadas diretas de construção de objetos (usando o operador `new`) por chamadas para um método fábrica especial. Os objetos ainda são criados via operador `new`, mas esse operador é chamado de dentro do método fábrica.

![Solução do Factory Method](/images/patterns/creational/factory-method-solution.png)

Objetos retornados por um método fábrica geralmente são chamados de produtos.

## Estrutura

![Estrutura do Factory Method](/images/patterns/creational/factory-method-structure.png)

1. O **Produto** declara a interface, que é comum a todos os objetos que podem ser produzidos pelo criador e suas subclasses.

2. **Produtos Concretos** são diferentes implementações da interface do produto.

3. A classe **Criador** declara o método fábrica que retorna novos objetos produto. É importante que o tipo de retorno desse método corresponda à interface do produto.

4. **Criadores Concretos** sobrescrevem o método fábrica base para retornar um tipo diferente de produto.

## Código de Exemplo

```java
// Interface do Produto
interface Transporte {
    void entregar();
}

// Produtos Concretos
class Caminhao implements Transporte {
    public void entregar() {
        System.out.println("Entrega por terra em um caminhão");
    }
}

class Navio implements Transporte {
    public void entregar() {
        System.out.println("Entrega por mar em um navio");
    }
}

// Criador
abstract class LogisticaFactory {
    // Factory Method
    public abstract Transporte criarTransporte();
    
    // Operações que usam o Factory Method
    public void planificarEntrega() {
        Transporte transporte = criarTransporte();
        System.out.println("Preparando a entrega...");
        transporte.entregar();
    }
}

// Criadores Concretos
class LogisticaRodoviaria extends LogisticaFactory {
    @Override
    public Transporte criarTransporte() {
        return new Caminhao();
    }
}

class LogisticaMaritima extends LogisticaFactory {
    @Override
    public Transporte criarTransporte() {
        return new Navio();
    }
}

// Cliente
public class Main {
    public static void main(String[] args) {
        LogisticaFactory logistica;
        
        // Configuração da aplicação
        String tipoEntrega = "maritima"; // Pode vir de configuração ou parâmetro
        
        if (tipoEntrega.equals("rodoviaria")) {
            logistica = new LogisticaRodoviaria();
        } else {
            logistica = new LogisticaMaritima();
        }
        
        // O código do cliente funciona com qualquer subclasse de LogisticaFactory
        logistica.planificarEntrega();
    }
}