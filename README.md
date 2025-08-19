# 🫐 BlueFruit Nutrition - Mobile App

![BlueFruit Mobile Logo](https://via.placeholder.com/600x200/001a4d/ffffff?text=BlueFruit+Nutrition+Mobile)

[![React Native](https://img.shields.io/badge/React_Native-0.79.5-blue.svg)](https://reactnative.dev/)
[![Expo](https://img.shields.io/badge/Expo-~53.0.20-black.svg)](https://expo.dev/)
[![React](https://img.shields.io/badge/React-19.0.0-blue.svg)](https://reactjs.org/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

## 👥 Integrantes del Equipo

- **Katherine Sofia Ceron Guillen** - *20220026* - Coordinadora  
- **Rodrigo Leonel Torres Escobar** - *20200594* - Subcoordinador
- **David Miguel Zepeda Romero** - *20230231* - Secretario
- **Olga Fernanda Mendez Flores** - *20220525* - Tesorero 
- **Rodrigo Jose Cordova Monge** - *20230333* - Vocal  

---

## 💡 Descripción de la Aplicación

La aplicación móvil de **Blue Fruit Nutrición** es una extensión de la plataforma web que permite a los usuarios acceder a todos los productos y servicios de la empresa desde sus dispositivos móviles. Desarrollada con React Native y Expo, la app proporciona una experiencia nativa optimizada para compras y administración de la tienda.

### 🎯 Objetivos de la App Móvil
- Facilitar las compras de productos nutricionales desde dispositivos móviles
- Proporcionar una experiencia de usuario nativa y fluida
- Permitir la administración de la tienda desde cualquier lugar
- Ofrecer funcionalidades exclusivas para dispositivos móviles

## ✨ Características Principales

### 📱 Funcionalidades Móviles

#### 🛍️ Compras y Catálogo
- **Navegación de productos** optimizada para móvil
- **Carrito de compras** persistente
- **Proceso de compra** simplificado
- **Búsqueda rápida** de productos
- **Filtros avanzados** por categoría y precio

#### 👤 Gestión de Usuario
- **Inicio de sesión** rápido y seguro
- **Perfil de usuario** personalizable
- **Historial de compras** detallado
- **Lista de favoritos** de productos

#### 🔐 Panel Administrativo Móvil
- **Gestión de inventario** desde el móvil
- **Administración de pedidos** en tiempo real
- **Dashboard móvil** con métricas clave
- **Notificaciones push** para administradores

#### 📊 Características Exclusivas Móviles
- **Personalización avanzada** basada en datos del usuario
- **Recomendaciones inteligentes** según perfil
- **Notificaciones push** para ofertas y actualizaciones
- **Acceso offline** para consulta de productos guardados

## 🛠️ Tecnologías Utilizadas

### 📱 Stack Móvil
| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| **React Native** | 0.79.5 | Framework de desarrollo móvil |
| **Expo** | ~53.0.20 | Plataforma de desarrollo y deploy |
| **React** | 19.0.0 | Librería base para componentes |
| **Expo Status Bar** | ~2.2.3 | Manejo de la barra de estado |
| **Expo Splash Screen** | ~0.30.10 | Pantalla de carga |

### 📦 Dependencias Principales
```json
{
  "expo": "~53.0.20",
  "react": "19.0.0",
  "react-native": "0.79.5",
  "@react-navigation/native-stack": "^7.3.24",
  "@react-native-community/datetimepicker": "^8.4.3",
  "@react-native-community/slider": "^4.5.7",
  "expo-status-bar": "~2.2.3",
  "expo-splash-screen": "~0.30.10"
}
```

### ⚙️ Dependencias de Desarrollo
```json
{
  "@babel/core": "^7.20.0"
}
```

## 🗂️ Estructura del Proyecto

```
BlueFruit-Mobile/
├── .expo/                       # Archivos de configuración de Expo
├── assets/                      # Recursos estáticos
│   ├── images/                  # Imágenes de la aplicación
│   ├── icons/                   # Iconos y logos
│   └── fonts/                   # Fuentes personalizadas
├── node_modules/                # Dependencias instaladas
├── src/                         # Código fuente de la aplicación
│   ├── navigation/              # Configuración de navegación
│   │   ├── AppNavigator.js      # Navegador principal
│   │   ├── AuthNavigator.js     # Navegación de autenticación
│   │   └── TabNavigator.js      # Navegación con pestañas
│   └── screens/                 # Pantallas de la aplicación
│       ├── HomeScreen.js        # Pantalla principal
│       ├── ProductsScreen.js    # Catálogo de productos
│       ├── CartScreen.js        # Carrito de compras
│       ├── ProfileScreen.js     # Perfil del usuario
│       ├── LoginScreen.js       # Pantalla de login
│       ├── RegisterScreen.js    # Pantalla de registro
│       ├── AdminScreen.js       # Panel administrativo
│       ├── OrdersScreen.js      # Gestión de pedidos
│       ├── InventoryScreen.js   # Gestión de inventario
│       └── SettingsScreen.js    # Configuraciones
├── App.js                       # Componente principal de la app
├── app.json                     # Configuración de Expo
├── index.js                     # Punto de entrada de la aplicación
├── package.json                 # Dependencias y scripts
├── package-lock.json            # Lock file de dependencias
└── README.md                    # Este archivo
```

## 🚀 Instalación y Configuración

### 📋 Prerrequisitos
- **Node.js** v18 o superior
- **npm** o **yarn**
- **Expo CLI** instalado globalmente
- **Expo Go** app (para testing en dispositivo físico)
- **Android Studio** (para emulador Android) o **Xcode** (para simulador iOS)

### ⚙️ Configuración del Proyecto

1. **Clonar el repositorio**:
```bash
git clone https://github.com/tu-usuario/bluefruit-mobile.git
cd bluefruit-mobile
```

2. **Instalar dependencias**:
```bash
npm install
```

3. **Instalar Expo CLI** (si no está instalado):
```bash
npm install -g @expo/cli
```

### 📱 Ejecutar la Aplicación

#### 🔧 Scripts Disponibles

```bash
# Iniciar el servidor de desarrollo
npm start
# o
expo start

# Ejecutar en Android
npm run android
# o
expo start --android

# Ejecutar en iOS
npm run ios
# o
expo start --ios

# Ejecutar en navegador web
npm run web
# o
expo start --web
```

#### 📲 Testing en Dispositivo Físico

1. **Instalar Expo Go** desde App Store o Google Play
2. **Escanear el QR** que aparece en la terminal o navegador
3. **La app se cargará** automáticamente en tu dispositivo

#### 🖥️ Testing en Emulador

##### Android:
1. Abrir **Android Studio** y iniciar un emulador
2. Ejecutar `npm run android`

##### iOS (solo en Mac):
1. Abrir **Xcode** y iniciar un simulador
2. Ejecutar `npm run ios`

## 📱 Pantallas de la Aplicación

### 🔐 Autenticación
- **LoginScreen**: Inicio de sesión para usuarios
- **RegisterScreen**: Registro de nuevos usuarios

### 🏠 Principales
- **HomeScreen**: Pantalla principal con productos destacados
- **ProductsScreen**: Catálogo completo de productos
- **CartScreen**: Carrito de compras y proceso de pago
- **ProfileScreen**: Perfil del usuario y configuraciones

### 🔧 Administrativas
- **AdminScreen**: Panel de control administrativo
- **OrdersScreen**: Gestión de pedidos y órdenes
- **InventoryScreen**: Administración del inventario

### ⚙️ Configuración
- **SettingsScreen**: Configuraciones de la aplicación

## 🌐 Integración con Backend

La aplicación móvil se conecta con la misma API REST del backend web:

### 🔗 Endpoints Principales
```javascript
// Configuración base de la API
const API_BASE_URL = 'https://tu-backend.herokuapp.com/api';

// Autenticación
POST /api/login
POST /api/logout
POST /api/registerCustomers

// Productos
GET /api/products
GET /api/products/:id

// Carrito y Órdenes
POST /api/shoppingCart
GET /api/ordenes
POST /api/ordenes

// Usuario
GET /api/customers
PUT /api/customers/:id
```

## 📦 Funcionalidades Implementadas

### ✅ Características Móviles Completadas
- [x] **Navegación nativa** con React Navigation
- [x] **Pantallas principales** de la aplicación
- [x] **Integración con Expo** para desarrollo rápido
- [x] **Componentes nativos** optimizados
- [x] **Splash screen** personalizada
- [x] **Manejo de estado** local

### 🔄 En Desarrollo
- [ ] **Conexión con API** del backend
- [ ] **Autenticación completa** de usuarios
- [ ] **Carrito de compras** funcional
- [ ] **Notificaciones push** con Expo Notifications
- [ ] **Cámara integrada** para escaneo de productos
- [ ] **Geolocalización** para tiendas cercanas

## 🚀 Build y Distribución

### 📦 Build para Producción

#### Android APK:
```bash
# Build de desarrollo
expo build:android

# Build optimizado para producción
eas build --platform android
```

#### iOS:
```bash
# Build para iOS (requiere Apple Developer Account)
expo build:ios

# Build optimizado para producción
eas build --platform ios
```

### 🏪 Distribución

#### Google Play Store:
1. Generar APK/AAB de producción
2. Subir a Google Play Console
3. Completar información de la app
4. Publicar para revisión

#### Apple App Store:
1. Generar IPA de producción
2. Subir a App Store Connect
3. Completar información de la app
4. Enviar para revisión de Apple

## 🎨 Personalización y Temas

### 🌈 Configuración de Colores
```javascript
// Paleta de colores de BlueFruit
const colors = {
  primary: '#001a4d',      // Azul oscuro BlueFruit
  secondary: '#0056b3',    // Azul claro
  accent: '#28A745',       // Verde para acciones
  background: '#F8F9FA',   // Fondo claro
  text: '#333333',         // Texto principal
  textLight: '#666666'     // Texto secundario
};
```

### 📱 Configuración de la App (app.json)
```json
{
  "expo": {
    "name": "BlueFruit Nutrition",
    "slug": "bluefruit-nutrition",
    "version": "1.0.0",
    "platforms": ["ios", "android", "web"],
    "icon": "./assets/icon.png",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#001a4d"
    }
  }
}
```

## 📄 Licencia

Este proyecto está desarrollado como parte del **Proceso de Titulación de Carreras** y está sujeto a las políticas académicas correspondientes.

---

<div align="center">

**📱 Desarrollado con 💚 por el equipo de PTC-BlueFruitNutrition 📱**

</div>
