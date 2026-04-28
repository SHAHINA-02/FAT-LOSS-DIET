# LUMINA DIET PLANNER — Personalized Fat Loss & Nutrition Planner

![Status](https://img.shields.io/badge/Status-Production-brightgreen?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)
![Deployed](https://img.shields.io/badge/Deployed-Vercel-black?style=flat-square)
![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)

### Your Personalized Path to Fat Loss — Beautifully Calculated.

**Live Demo:** https://fat-loss-diet.vercel.app

SCREENSHOTS- https://github.com/SHAHINA-02/FAT-LOSS-DIET/tree/0c3d23388e1eb5bb64835bddc2b177f41be2bea1/FAT%20LOSS

---

## ABOUT

Lumina Diet Planner is a personalized nutrition and fat loss calculator that takes user body metrics and goals as input and generates a tailored daily calorie target, macronutrient breakdown, and a structured sample meal plan — instantly, with no sign-up required.

Built for anyone looking to understand their nutrition numbers clearly and act on them with a practical daily meal structure.

---

## HOW IT WORKS

```
User Input (Age, Gender, Weight, Height, Activity Level, Fat Loss Goal)
        ↓
BMR Calculation (Mifflin-St Jeor Formula)
        ↓
TDEE → Caloric Deficit Applied (based on goal)
        ↓
Macro Split (Protein / Carbs / Fats)
        ↓
Sample Meal Plan (Breakfast, Lunch, Snack, Dinner) with kcal per meal
```

---

## FEATURES

**User Input Form**
- Age, gender, weight (kg), height (cm)
- Activity level: Sedentary, Lightly Active, Moderately Active, Very Active
- Fat loss goal: Steady Weight Loss (20% deficit) and additional options

**Results Dashboard**
- Target calories (daily limit for fat loss)
- Maintenance calories (TDEE to maintain current weight)
- Daily macros: Protein (g), Carbs (g), Fats (g) — colour-coded

**Sample Meal Structure**
- Four meals generated: Breakfast, Lunch, Afternoon Snack, Dinner
- Each meal shows: suggested food, approximate macros (P / C / F), and kcal
- Recalculate button to regenerate with updated inputs

**Design**
- Dark navy and purple gradient UI
- Clean, readable typography
- Fully responsive layout

---

## TECH STACK

| Layer      | Technology              |
|------------|-------------------------|
| Framework  | Next.js 15 (App Router) |
| Language   | TypeScript              |
| Styling    | Tailwind CSS            |
| Logic      | BMR / TDEE Calculations |
| Deployment | Vercel                  |

---

## INSTALLATION

**Prerequisites:** Node.js 18+

```bash
git clone https://github.com/YOUR_USERNAME/fat-loss-diet.git
cd fat-loss-diet
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

---

## ROADMAP

- [ ] AI-generated meal plan using Claude API
- [ ] Weekly meal planner view
- [ ] Shopping list export (PDF / CSV)
- [ ] UAE-specific food options (Arabic cuisine macros)
- [ ] Progress tracker with weight log

---

## AUTHOR

**SHAHINA S** — Full Stack Developer & AI Engineer, UAE

- Portfolio: https://yoursite.com
- LinkedIn: https://linkedin.com/in/yourhandle
- Email: you@email.com

---

*MIT License. Open source. No sign-up required.*
