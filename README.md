# E-Learning Platform Admin Dashboard

A **production-ready, enterprise-grade admin dashboard** for managing comprehensive e-learning platforms. Built with modern web technologies, this dashboard provides administrators with powerful tools to manage courses, students, instructors, analytics, and payments.

## Overview

The E-Learning Admin Dashboard is a feature-rich application designed for educational platform operators who need robust administration capabilities. It combines a professional user interface with intuitive workflows, making complex operations simple and efficient.

### Key Highlights

- **Enterprise Architecture**: Modular components, scalable design patterns, and production-ready code structure
- **Full Authentication System**: Secure login with session management and admin approval workflow
- **Complete CRUD Operations**: Manage courses, students, and instructors with real-time state updates
- **Advanced Analytics**: Comprehensive reporting with charts, metrics, and data export capabilities
- **Responsive Design**: Mobile-first approach with full desktop optimization
- **Accessibility First**: WCAG-compliant with full keyboard navigation and screen reader support
- **Dark Mode Support**: Seamless light and dark theme switching

---

## Features

### Authentication & Security
- Secure admin login with email and password
- Session-based authentication with persistent storage
- Admin approval workflow for new instructors
- Role-based access control (admin-only interface)
- Logout functionality with session cleanup

### Dashboard Overview
- Real-time KPI cards with trend indicators
  - Total Students
  - Active Courses
  - Monthly Revenue
  - Course Completion Rate
- Student growth trends visualization
- Course enrollment analysis
- Category distribution analysis
- Recent activity feed

### Course Management
- Comprehensive course listing with advanced search and filtering
- Course status tracking (Draft, Published, Archived)
- Bulk operations support
- Add/Edit/Delete course workflows
- Instructor assignment
- Category management
- Enrollment tracking

### Student Management
- Complete student roster with detailed profiles
- Enrollment history tracking
- Progress indicators and completion rates
- Student status management (Active, Suspended)
- Bulk student operations
- Student drawer with detailed information
- Performance analytics per student

### Instructor Management
- Instructor approval workflow
- Performance metrics and statistics
- Revenue contribution tracking
- Assigned courses management
- Instructor performance charts
- Bulk approval/rejection actions

### Analytics & Reporting
- Revenue trend analysis
- Completion rate metrics
- Student dropoff analysis
- Date range filtering
- Export functionality (CSV, PDF)
- Performance benchmarking
- Enrollment analytics

### Payments & Subscriptions
- Revenue summary cards
- Transaction history with detailed view
- Subscription plan management
- Payment status indicators
- Refund tracking
- Revenue by course/instructor

### Content Management
- Hierarchical lesson structure (Course → Module → Lesson)
- Visual drag-and-drop interface (UI support)
- Lesson status indicators
- Lesson reordering capabilities
- Content organization tools

### Settings & Configuration
- Platform-wide settings
- Theme customization (Light/Dark mode toggle)
- Notification preferences
- Security settings
- Role and permission management
- System configuration

### Admin Profile
- Profile information management
- Account settings
- Change password functionality
- Activity log tracking
- Account security options

---

## Tech Stack

### Frontend
- **Framework**: [Next.js 16](https://nextjs.org) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com)
- **Icons**: [Lucide React](https://lucide.dev)
- **Charts**: [Recharts](https://recharts.org)
- **Forms**: [React Hook Form](https://react-hook-form.com) + [Zod](https://zod.dev)
- **Animations**: [Framer Motion](https://www.framer.com/motion)
- **State Management**: React Hooks + Custom Hooks
- **Theme Management**: [next-themes](https://github.com/pacocoursey/next-themes)

### Development Tools
- TypeScript for type safety
- ESLint for code quality
- PostCSS for CSS processing
- Autoprefixer for browser compatibility

### Key Features
- **Mock Data System**: Complete mock data structure for development and testing
- **Local Storage Persistence**: Client-side storage for session and data persistence
- **Custom Hooks**: Purpose-built hooks for auth, courses, students, and instructors
- **Server Actions Ready**: Architecture supports easy migration to server actions and APIs

---

## Installation & Setup

### Prerequisites
- Node.js 18+ (LTS recommended)
- npm or yarn package manager
- Modern web browser with JavaScript enabled

### Quick Start

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd elearning-admin-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
npm run start
```

### Linting & Code Quality

```bash
npm run lint
```

---

## Project Structure

```
elearning-admin-dashboard/
├── app/
│   ├── (auth)/                      # Authentication routes
│   │   ├── layout.tsx               # Auth layout wrapper
│   │   ├── login/
│   │   │   └── page.tsx             # Login page with form
│   │   ├── register/
│   │   │   └── page.tsx             # Admin registration page
│   │   └── forgot-password/
│   │       └── page.tsx             # Password recovery
│   ├── dashboard/
│   │   ├── layout.tsx               # Dashboard layout with sidebar/topbar
│   │   └── page.tsx                 # Dashboard overview
│   ├── courses/
│   │   ├── layout.tsx               # Courses section layout
│   │   └── page.tsx                 # Course management page
│   ├── students/
│   │   ├── layout.tsx               # Students section layout
│   │   └── page.tsx                 # Student management page
│   ├── instructors/
│   │   ├── layout.tsx               # Instructors section layout
│   │   └── page.tsx                 # Instructor management page
│   ├── analytics/
│   │   ├── layout.tsx               # Analytics section layout
│   │   └── page.tsx                 # Analytics & reports page
│   ├── payments/
│   │   ├── layout.tsx               # Payments section layout
│   │   └── page.tsx                 # Payments & subscriptions page
│   ├── content/
│   │   ├── layout.tsx               # Content section layout
│   │   └── page.tsx                 # Lesson management page
│   ├── settings/
│   │   └── page.tsx                 # Platform settings
│   ├── profile/
│   │   └── page.tsx                 # Admin profile page
│   ├── layout.tsx                   # Root layout with providers
│   ├── globals.css                  # Global styles and design tokens
│   └── page.tsx                     # Home/redirect page
│
├── components/
│   ├── layout/
│   │   ├── admin-layout.tsx         # Main dashboard layout wrapper
│   │   ├── sidebar.tsx              # Collapsible navigation sidebar
│   │   └── topbar.tsx               # Top navigation bar
│   ├── dashboard/
│   │   ├── student-growth-chart.tsx # Line chart component
│   │   ├── course-enrollments-chart.tsx # Bar chart component
│   │   ├── course-categories-chart.tsx # Pie chart component
│   │   └── recent-activity-table.tsx # Activity feed
│   ├── courses/
│   │   ├── course-table.tsx         # Courses data table
│   │   └── course-modal.tsx         # Add/Edit course dialog
│   ├── students/
│   │   ├── student-table.tsx        # Students data table
│   │   └── student-drawer.tsx       # Student detail view
│   ├── instructors/
│   │   └── instructor-table.tsx     # Instructors data table
│   ├── analytics/
│   │   ├── revenue-chart.tsx        # Revenue trend chart
│   │   ├── completion-rate-chart.tsx # Completion metrics
│   │   └── dropoff-analysis-chart.tsx # Dropoff visualization
│   ├── payments/
│   │   ├── subscription-plans.tsx   # Subscription card grid
│   │   └── transactions-table.tsx   # Payment history
│   ├── common/
│   │   ├── breadcrumb.tsx           # Breadcrumb navigation
│   │   ├── page-header.tsx          # Page title with actions
│   │   ├── stats-card.tsx           # KPI card component
│   │   ├── empty-state.tsx          # Empty data state
│   │   └── loading-skeleton.tsx     # Skeleton loader
│   └── ui/                          # shadcn/ui components
│
├── hooks/
│   ├── use-auth.ts                  # Authentication hook
│   ├── use-courses.ts               # Course management hook
│   ├── use-students.ts              # Student management hook
│   └── use-instructors.ts           # Instructor management hook
│
├── lib/
│   ├── types.ts                     # TypeScript type definitions
│   ├── mock-data.ts                 # Mock data generators
│   ├── auth.ts                      # Authentication utilities
│   ├── storage.ts                   # Local storage helpers
│   └── utils.ts                     # Utility functions
│
├── public/                          # Static assets
├── package.json                     # Dependencies and scripts
├── tsconfig.json                    # TypeScript configuration
├── next.config.mjs                  # Next.js configuration
├── tailwind.config.ts               # Tailwind CSS configuration
├── postcss.config.mjs               # PostCSS configuration
└── README.md                        # This file

```

---

## Usage Guide

### Authentication Flow

1. **Initial Login**
   - Navigate to `/login`
   - Enter credentials (demo: `admin@example.com` / `password123`)
   - Session is stored in localStorage
   - Automatically redirected to dashboard

2. **Session Management**
   - Session persists across page refreshes
   - Logout clears session and redirects to login
   - Access to protected routes requires active session

### Managing Courses

1. **View Courses**
   - Navigate to **Courses** section
   - Search by title or instructor
   - Filter by status (Draft, Published, Archived)
   - Sort by enrollments, date, etc.

2. **Add New Course**
   - Click **Add New Course** button
   - Fill in course details
   - Select instructor and category
   - Set status and click Save

3. **Edit Course**
   - Click **Edit** action on course row
   - Update information
   - Save changes

4. **Delete Course**
   - Click **Delete** action
   - Confirm deletion

### Managing Students

1. **View Students**
   - Navigate to **Students** section
   - Search by name, email, or ID
   - Filter by enrollment status
   - View progress indicators

2. **Student Details**
   - Click on student row to open drawer
   - View enrollment history
   - Check course progress
   - View contact information

3. **Bulk Operations**
   - Select multiple students
   - Perform bulk actions (suspend, activate, etc.)

### Analytics & Reporting

1. **View Analytics**
   - Navigate to **Analytics** section
   - Select date range for analysis
   - View revenue trends, completion rates
   - Analyze student dropoff patterns

2. **Export Reports**
   - Click **Export as CSV** or **Export as PDF**
   - Choose date range and metrics
   - Download report file

---

## State Management

### Authentication State

```typescript
// useAuth hook provides:
{
  user: {
    id: string;
    email: string;
    name: string;
    role: 'admin';
  };
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  register: (data: RegisterData) => Promise<void>;
}
```

### Course State

```typescript
// useCourses hook provides:
{
  courses: Course[];
  isLoading: boolean;
  error: string | null;
  addCourse: (course: CourseData) => void;
  updateCourse: (id: string, data: Partial<CourseData>) => void;
  deleteCourse: (id: string) => void;
  searchCourses: (query: string) => Course[];
}
```

### Student State

```typescript
// useStudents hook provides:
{
  students: Student[];
  isLoading: boolean;
  error: string | null;
  addStudent: (student: StudentData) => void;
  updateStudent: (id: string, data: Partial<StudentData>) => void;
  enrollStudent: (studentId: string, courseId: string) => void;
  searchStudents: (query: string) => Student[];
}
```

---

## Components

### Common Components

#### StatsCard
Displays KPI information with trend indicators.

```tsx
<StatsCard
  title="Total Students"
  value={1234}
  trend={{ value: 12, direction: 'up' }}
  icon={Users}
/>
```

#### PageHeader
Page title with action buttons.

```tsx
<PageHeader
  title="Course Management"
  description="Manage all courses in your platform"
  actions={[
    { label: 'Add Course', onClick: handleAdd, variant: 'default' }
  ]}
/>
```

#### EmptyState
Shows when no data is available.

```tsx
<EmptyState
  icon={Inbox}
  title="No courses yet"
  description="Get started by creating your first course"
  action={{ label: 'Create Course', onClick: handleCreate }}
/>
```

### Data Display Components

#### Course Table
Searchable, filterable course listing.

```tsx
<CourseTable
  courses={courses}
  onEdit={handleEdit}
  onDelete={handleDelete}
  onView={handleView}
/>
```

#### Student Table
Student roster with filtering and bulk actions.

```tsx
<StudentTable
  students={students}
  onSelectStudent={handleSelect}
  onBulkAction={handleBulkAction}
/>
```

---

## Customization

### Theme Customization

Edit `app/globals.css` to customize design tokens:

```css
@theme inline {
  --color-primary: #3B82F6;      /* Primary brand color */
  --color-accent: #F97316;       /* Accent color */
  --color-background: #FFFFFF;   /* Background color */
  --color-foreground: #1F2937;   /* Text color */
  --radius: 0.5rem;              /* Border radius */
}
```

### Adding New Courses

1. Create new files in `app/[section]/`
2. Use the AdminLayout wrapper
3. Integrate with custom hooks
4. Follow existing component patterns

### Extending Authentication

1. Update `lib/auth.ts` with your provider
2. Modify `hooks/use-auth.ts` for API calls
3. Update environment variables
4. Test authentication flow

---

## Form Validation

Forms use React Hook Form with Zod schema validation:

```typescript
const courseSchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters'),
  description: z.string().min(10, 'Description required'),
  category: z.enum(['Programming', 'Design', 'Business']),
  price: z.number().min(0, 'Price must be positive'),
  instructor: z.string().min(1, 'Instructor required'),
});

type CourseFormData = z.infer<typeof courseSchema>;
```

---

## Accessibility

The dashboard is built with accessibility as a core principle:

- **ARIA Labels**: All interactive elements have proper ARIA labels
- **Keyboard Navigation**: Full keyboard support for all features
- **Screen Reader Support**: Semantic HTML and ARIA roles throughout
- **Color Contrast**: WCAG AA compliant color combinations
- **Focus Indicators**: Clear focus states for keyboard users
- **Semantic HTML**: Proper use of headings, nav, main elements

### Keyboard Shortcuts

- `Tab` - Navigate between elements
- `Shift + Tab` - Navigate backwards
- `Enter` - Activate buttons and links
- `Esc` - Close modals and drawers
- `Space` - Toggle checkboxes

---

## Performance Optimization

- **Code Splitting**: Route-based code splitting with Next.js
- **Image Optimization**: Optimized images and SVG icons
- **Data Fetching**: React hooks with memoization
- **CSS**: Tailwind CSS production build optimization
- **Bundling**: Tree-shaking and minification in production

---

## Browser Support

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## Migration to Backend

### From Mock Data to API

1. **Replace mock data calls**
   ```typescript
   // Before (mock)
   const courses = mockCourses;

   // After (API)
   const { data: courses } = await fetch('/api/courses').then(r => r.json());
   ```

2. **Update hooks to use fetch/SWR**
   ```typescript
   import useSWR from 'swr';

   export function useCourses() {
     const { data, error, isLoading } = useSWR('/api/courses', fetcher);
     return { courses: data, isLoading, error };
   }
   ```

3. **Create API routes**
   ```typescript
   // app/api/courses/route.ts
   export async function GET() {
     const courses = await db.courses.findAll();
     return Response.json(courses);
   }
   ```

---

## Best Practices

### Code Organization
- Keep components single-responsibility
- Use custom hooks for business logic
- Maintain type safety with TypeScript
- Follow naming conventions consistently

### Performance
- Lazy load heavy components
- Memoize expensive computations
- Optimize re-renders with React.memo
- Use proper key props in lists

### Security
- Validate all form inputs
- Sanitize user-generated content
- Use HTTPS in production
- Implement CSRF protection
- Secure session management

### Testing
- Unit test utility functions
- Integration test page flows
- E2E test critical user paths
- Test accessibility with screen readers

---

## Troubleshooting

### Common Issues

**Issue: Login not working**
- Clear localStorage and refresh
- Check browser console for errors
- Verify credentials match mock data

**Issue: Data not persisting**
- Ensure localStorage is enabled
- Check browser storage limits
- Verify hook integration

**Issue: Charts not displaying**
- Check data is being passed correctly
- Verify Recharts is properly installed
- Check console for rendering errors

---

## Contributing

Contributions are welcome! Please follow these guidelines:

1. Create a feature branch from `main`
2. Commit changes with clear messages
3. Push to your fork
4. Submit a pull request with description

### Code Style
- Use TypeScript for type safety
- Follow existing patterns and conventions
- Add comments for complex logic
- Test before submitting PR

---

## License

This project is licensed under the MIT License - see LICENSE file for details.

---

## Support & Resources

- **Documentation**: See this README
- **Issues**: Report bugs on GitHub
- **Discussions**: Join community discussions
- **Email**: support@elearningplatform.com

---

## Changelog

### v1.0.0 - Initial Release
- Complete admin dashboard with 10+ pages
- Full authentication system
- Course, student, instructor management
- Advanced analytics and reporting
- Payment and subscription tracking
- Dark mode support
- Mobile-responsive design
- Accessibility features

---

## Author

**Solomon Kassa**

Full-stack developer with expertise in modern web technologies, SaaS applications, and enterprise software design. Passionate about creating scalable, user-centric solutions.

- GitHub: [@solomonkassa](https://github.com)
- Email: solomon@kassa.dev
- Portfolio: [kassa.dev](https://kassa.dev)

---

## Acknowledgments

- Built with [Next.js](https://nextjs.org)
- UI Components from [shadcn/ui](https://ui.shadcn.com)
- Charts powered by [Recharts](https://recharts.org)
- Icons by [Lucide React](https://lucide.dev)
- Styling with [Tailwind CSS](https://tailwindcss.com)

---

**Built with ❤️ by Solomon Kassa**
