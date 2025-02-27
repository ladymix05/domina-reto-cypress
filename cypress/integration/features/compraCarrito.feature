Feature: Flujo E2E de compra
  Flujo de compra completo, desde login hasta finalizacion, con productos agregados y eliminados.

  Scenario: Inicio de sesion y compra completa E2E
    Given que ingreso a la pagina de login
    When ingreso los datos de login
    Then valido que este en la pagina de inventario
    And agrego los productos al carrito
    When voy al carrito de compras
    Then valido que hayan 3 productos
    When elimino el tercer producto
    Then valido que solo esten 2 productos
    And continua con el checkout
    When llena los datos del checkout
    Then finaliza el primer paso del checkout
    And valida la lista de productos en el segundo paso del checkout
    And finaliza el segundo paso del checkout
    Then valida el checkout completado
    And regresa a la pagina de inventario
    And presiona el boton de menu
    Then cierra sesion