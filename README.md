# 🌟 Srustika N - Professional Portfolio

A stunning, modern, and fully responsive portfolio website built with HTML5, CSS3, and JavaScript featuring smooth animations, beautiful graphics, and interactive elements.

## 📋 Features

✨ **Modern Design**
- Clean and professional layout
- Gradient color scheme with primary, secondary, and accent colors
- Smooth animations and transitions throughout

🎨 **Visual Elements**
- Animated hero image with floating effect
- Rotating border animation around profile image
- Gradient text effects with glow animation
- Floating particle effects in hero section
- Beautiful stat cards with hover effects

⚡ **Interactive Features**
- Smooth scroll navigation
- Animated skill progress bars
- Contact form with validation
- Mobile-responsive hamburger menu
- Parallax scrolling effect
- Download resume functionality
- Form notifications (success/error)

📱 **Responsive Design**
- Desktop, tablet, and mobile optimized
- Flexible grid layouts
- Media queries for all screen sizes
- Touch-friendly mobile menu

🎯 **Sections Included**
1. **Navigation Bar** - Fixed header with smooth scroll links
2. **Hero Section** - Eye-catching introduction with profile image
3. **About Section** - Career objective and key statistics
4. **Skills Section** - Technical skills with animated progress bars
5. **Contact Section** - Contact information and message form
6. **Footer** - Social media links

## 📁 Files Structure

```
srusti port/
├── index.html                    # Main HTML file
├── styles.css                    # Complete styling with animations
├── script.js                     # Interactive functionality
├── srusti resume.txt.rtf         # Your resume (original)
└── WhatsApp Image 2026-04-18...  # Your profile photo
```

## 🚀 How to Use

### Step 1: Open the Portfolio
Simply open `index.html` in any modern web browser:
- Double-click the file, or
- Right-click → "Open with" → Select your browser

### Step 2: View on Different Devices
- **Desktop**: Full navigation and all animations
- **Tablet**: Optimized layout, responsive grid
- **Mobile**: Hamburger menu, touch-friendly design

### Step 3: Customize Your Portfolio

#### Update Your Information:
In `index.html`, find and update:
- **Name and email** in the hero section
- **Career objective** - modify the text
- **Skills** - add or remove from the skills section
- **Contact information** - update email and other details

#### Add Your Social Media Links:
Find the footer section and update:
```html
<a href="YOUR_LINKEDIN_URL">LinkedIn</a>
<a href="YOUR_GITHUB_URL">GitHub</a>
```

#### Change Colors:
In `styles.css`, modify the root variables:
```css
:root {
    --primary-color: #4f46e5;        /* Main color */
    --secondary-color: #06b6d4;      /* Secondary color */
    --accent-color: #f97316;         /* Accent color */
}
```

## 🎨 Animation Effects Included

- **Fade In/Up** - Elements appear smoothly from bottom
- **Slide animations** - Content slides in from sides
- **Glow effect** - Highlighted text glows subtly
- **Float animation** - Image floats up and down
- **Rotating border** - Border rotates around image
- **Progress bar fill** - Skills bar fills on scroll
- **Hover effects** - Cards lift and change shadow on hover
- **Parallax** - Image moves with scroll

## 📧 Contact Form

The contact form is ready to use:
1. Users can fill in their name, email, and message
2. Form validates all fields are filled
3. Shows success notification on submit
4. Ready to integrate with backend email service

*Note: Currently shows a local notification. To send actual emails, connect to a backend service (Node.js, Python Flask, etc.)*

## 🔄 Resume Download

Click "Download Resume" button to download a text version of your resume. You can customize the content in the `downloadResume()` function in `script.js`.

## 🌐 Browser Support

- Chrome (Latest)
- Firefox (Latest)
- Safari (Latest)
- Edge (Latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎯 Responsive Breakpoints

- **Desktop**: 1200px and above - Full layout
- **Tablet**: 768px - 1199px - Adjusted grid
- **Mobile**: Below 768px - Single column, mobile menu

## ⚙️ Advanced Customization

### Change Font Family:
In `styles.css`, update the body font-family property

### Add More Sections:
1. Add a new `<section>` in `index.html`
2. Add corresponding CSS in `styles.css`
3. Add animation triggers in `script.js` if needed
4. Update navigation links

### Modify Animations:
All @keyframes animations are in `styles.css`. You can:
- Change animation duration
- Modify keyframe percentages
- Add new animations

## 📸 Profile Photo

Your professional photo is displayed in the hero section. To use a different image:
1. Replace or add your new image to the folder
2. Update the `src` attribute in the `<img>` tag

## 💡 Tips for Best Results

1. **Keep it updated** - Update skills and experience regularly
2. **Professional photo** - Ensure clear, professional profile image
3. **Customize colors** - Choose colors that match your brand
4. **Test on mobile** - Always check how it looks on phones
5. **Add real content** - Replace placeholder skills with your actual skills

## 🚀 Deploy Your Portfolio

### Free Hosting Options:
1. **GitHub Pages** - Free, fast, and easy
2. **Netlify** - Drag and drop deployment
3. **Vercel** - Optimized for performance
4. **Firebase Hosting** - Google's platform

### Steps to Deploy on GitHub Pages:
1. Create a GitHub repository named `username.github.io`
2. Push these files to the repository
3. Your portfolio will be live at `https://username.github.io`

## 📝 Notes

- All colors, animations, and styles are fully customizable
- The portfolio is lightweight and loads fast
- No external dependencies required (except Font Awesome icons)
- Fully responsive and accessible
- SEO-friendly HTML structure

## 🎓 What Makes This Portfolio Special

✅ Modern gradient design
✅ Smooth, professional animations
✅ Interactive and engaging
✅ Fully responsive
✅ Easy to customize
✅ Professional appearance
✅ Mobile-friendly
✅ Quick loading time
✅ Accessible design
✅ Ready to deploy

---

**Created with ❤️ for Your Professional Success!**

Start customizing and sharing your amazing portfolio! 🌟
