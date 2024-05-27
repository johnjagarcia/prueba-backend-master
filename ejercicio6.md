### Documento de Políticas de Nomenclatura

#### 1. **Nomenclatura de Bases de Datos**

- **Tablas**:

  - Uso de snake_case.
  - Deben ser sustantivos en plural.
  - Ejemplo: `users`, `order_items`, `product_categories`.

- **Columnas**:

  - Uso de snake_case.
  - Descriptivas y específicas.
  - Ejemplo: `first_name`, `order_date`, `product_id`.

- **Índices**:
  - Uso de snake_case.
  - Prefijo `idx_` seguido del nombre de la tabla y la columna.
  - Ejemplo: `idx_users_email`, `idx_order_items_product_id`.

#### 2. **Nomenclatura de Variables en TypeScript**

- **Variables**:

  - Uso de camelCase.
  - Nombres descriptivos y concisos.
  - Ejemplo: `firstName`, `orderDate`, `productId`.

- **Constantes**:
  - Uso de UPPER_SNAKE_CASE.
  - Ejemplo: `MAX_USERS`, `API_URL`, `DEFAULT_TIMEOUT`.

#### 3. **Nomenclatura de Funciones en TypeScript**

- **Funciones**:
  - Uso de camelCase.
  - Verbos que describan claramente la acción.
  - Ejemplo: `getUser`, `calculateTotal`, `sendEmail`.

#### 4. **Nomenclatura de Clases en TypeScript**

- **Clases**:
  - Uso de PascalCase.
  - Sustantivos que representen objetos o entidades.
  - Ejemplo: `User`, `OrderItem`, `ProductCategory`.

#### 5. **Nomenclatura de Interfaces en TypeScript**

- **Interfaces**:
  - Uso de PascalCase con prefijo `I`.
  - Ejemplo: `IUser`, `IOrderItem`, `IProductCategory`.

#### 6. **Nomenclatura de Archivos**

- **Archivos de Código**:
  - Uso de kebab-case.
  - Descriptivos y concisos.
  - Ejemplo: `user-controller.ts`, `order-service.ts`, `product-model.ts`.

#### 7. **Nomenclatura de Ramas y Commits en Git**

- **Ramas**:

  - Uso de kebab-case.
  - Prefijos para el tipo de trabajo (`feature/`, `bugfix/`, `hotfix/`).
  - Ejemplo: `feature/add-user-authentication`, `bugfix/fix-login-error`, `hotfix/update-readme`.

- **Commits**:
  - Estructura: `[Tipo]: Descripción`.
  - Tipos: `feature` (nueva funcionalidad), `fix` (corrección de errores), `refactor` (código).
  - Ejemplo: `feature: add user authentication`, `fix: correct login error`.

#### 8. **Nomenclatura de Endpoints en API**

- **RESTful Endpoints**:
  - Uso de kebab-case.
  - Nombres basados en recursos.
  - Ejemplo: `GET /api/users`, `POST /api/orders`, `PUT /api/products/:id`.
