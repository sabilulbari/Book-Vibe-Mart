# 📚 Book Vibe Mart

> A modern, interactive book discovery and management platform built with React and Vite

## 🌟 Overview

Book Vibe Mart is a comprehensive web application designed for book enthusiasts to discover, explore, and manage their reading journey. With an intuitive interface and powerful features, it transforms the way users interact with books.

## ✨ Key Features

### 🏠 **Homepage Experience**
- **Dynamic Banner**: Eye-catching hero section with book recommendations
- **Browse Collection**: Explore a curated selection of books with detailed information
- **Responsive Design**: Seamless experience across all devices

### 📖 **Book Management**
- **Detailed Book Information**: Comprehensive book details including ratings, genres, and descriptions
- **Personal Reading List**: Track books you want to read and mark favorites
- **Reading Progress**: Monitor your reading journey with visual charts

### 📊 **Analytics & Insights**
- **Reading Statistics**: Visual representation of your reading habits using Recharts
- **Progress Tracking**: Interactive charts showing pages read and completion rates
- **Personal Dashboard**: Customized insights based on your reading patterns

### 🎨 **User Experience**
- **Modern UI/UX**: Built with Tailwind CSS and DaisyUI for a beautiful, responsive interface
- **Smooth Navigation**: Client-side routing with React Router for seamless page transitions
- **Toast Notifications**: Real-time feedback for user actions
- **Tabbed Interface**: Organized content presentation with React Tabs

## 🛠️ Technology Stack

### Frontend
- **React 19.2.4** - Modern React with latest features
- **Vite 8.0.1** - Lightning-fast build tool and development server
- **React Router 7.14.0** - Client-side routing
- **Tailwind CSS 4.2.2** - Utility-first CSS framework
- **DaisyUI 5.5.19** - Component library built on Tailwind CSS

### Data & Visualization
- **Recharts 3.8.1** - Interactive charts and data visualization
- **React Toastify 11.0.5** - Beautiful notification system
- **React Tabs 6.1.1** - Accessible tab components

### Icons & UI Elements
- **Lucide React 1.7.0** - Beautiful, consistent icon system

### Development Tools
- **ESLint 9.39.4** - Code quality and consistency
- **TypeScript Support** - Type safety for better development experience

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/book-vibe-mart.git
   cd book-vibe-mart
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📱 Features Deep Dive

### 🏠 Homepage
- **Hero Banner**: Engaging introduction to the platform
- **Book Grid**: Filterable and searchable book collection
- **Quick Actions**: Easy access to key features

### 📚 Book Details
- **Comprehensive Information**: Title, author, genre, ratings, and more
- **Interactive Elements**: Add to reading list, mark as favorite
- **Related Books**: Smart recommendations based on current selection

### 📊 Reading Analytics
- **Visual Charts**: Track reading progress over time
- **Statistics**: Pages read, books completed, reading streaks
- **Goal Setting**: Set and monitor reading goals

### 📝 Personal Library
- **Listed Books**: Manage your personal reading list
- **Page Tracking**: Monitor progress for each book
- **Status Updates**: Mark books as reading, completed, or planned

## 🌐 Deployment

### Vercel Deployment
This project is optimized for Vercel deployment with proper routing configuration:

- **SPA Support**: Configured for single-page application routing
- **Automatic Builds**: Connected to Git repository for continuous deployment
- **Custom Domain**: Ready for custom domain configuration

### Build Configuration
- **Base Path**: Configured for root-level deployment
- **Asset Optimization**: Optimized build for production
- **Route Handling**: Proper client-side routing support

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for environment-specific configurations:

```env
VITE_API_BASE_URL=your_api_endpoint
VITE_APP_TITLE=Book Vibe Mart
```

### Routing
The application uses React Router with the following structure:
- `/` - Homepage
- `/listedBook` - Personal reading list
- `/pageToRead` - Reading statistics and charts
- `/bookDetails/:bookId` - Individual book details

## 🎨 Design System

### Color Palette
- Primary: Modern blue tones
- Secondary: Warm accent colors
- Neutral: Clean grays and whites

### Typography
- Clean, readable fonts optimized for screen reading
- Responsive typography scaling
- Consistent hierarchy throughout

### Components
- Modular, reusable component architecture
- Consistent spacing and sizing
- Accessibility-first design principles

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- React team for the amazing framework
- Vite team for the lightning-fast build tool
- Tailwind CSS for the utility-first CSS framework
- All contributors and users of Book Vibe Mart

---

**Made with ❤️ for book lovers everywhere**

*Happy Reading! 📖✨*