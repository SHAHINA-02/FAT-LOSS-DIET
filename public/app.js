document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('calculator-form');
    const resultsSection = document.getElementById('results-section');
    const calculatorSection = document.getElementById('calculator-section');
    const recalculateBtn = document.getElementById('recalculate-btn');

    // Stats Elements
    const targetCaloriesEl = document.getElementById('target-calories');
    const tdeeCaloriesEl = document.getElementById('tdee-calories');
    const macroProteinEl = document.getElementById('macro-protein');
    const macroCarbsEl = document.getElementById('macro-carbs');
    const macroFatsEl = document.getElementById('macro-fats');
    const mealListEl = document.getElementById('meal-list');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const age = parseInt(document.getElementById('age').value);
        const gender = document.getElementById('gender').value;
        const weight = parseFloat(document.getElementById('weight').value);
        const height = parseFloat(document.getElementById('height').value);
        const activityMultiplier = parseFloat(document.getElementById('activity').value);
        const deficitMultiplier = parseFloat(document.getElementById('goal').value);

        // 1. Calculate BMR using Mifflin-St Jeor Equation
        // Men: (10 × weight in kg) + (6.25 × height in cm) - (5 × age in years) + 5
        // Women: (10 × weight in kg) + (6.25 × height in cm) - (5 × age in years) - 161
        let bmr = (10 * weight) + (6.25 * height) - (5 * age);
        bmr = gender === 'male' ? bmr + 5 : bmr - 161;

        // 2. Calculate TDEE (Total Daily Energy Expenditure)
        const tdee = Math.round(bmr * activityMultiplier);

        // 3. Calculate Target Calories for Fat Loss
        const targetCalories = Math.round(tdee * deficitMultiplier);

        // 4. Calculate Macros
        // Protein: 2.2g per kg of body weight (high protein for muscle retention during fat loss)
        const proteinGrams = Math.round(weight * 2.2);
        const proteinCalories = proteinGrams * 4;

        // Fats: 25% of total target calories
        const fatCalories = targetCalories * 0.25;
        const fatGrams = Math.round(fatCalories / 9);

        // Carbs: Remaining calories
        const remainingCalories = targetCalories - (proteinCalories + fatCalories);
        // Ensure carbs don't go negative on extreme deficits
        const carbGrams = Math.max(0, Math.round(remainingCalories / 4));

        // Update UI with calculated values
        updateUI(tdee, targetCalories, proteinGrams, carbGrams, fatGrams);
        generateMealPlan(targetCalories, proteinGrams, carbGrams, fatGrams);

        // Switch views
        calculatorSection.classList.add('hidden');
        resultsSection.classList.remove('hidden');
    });

    recalculateBtn.addEventListener('click', () => {
        resultsSection.classList.add('hidden');
        calculatorSection.classList.remove('hidden');
        // Optional: clear form or keep previous values
        // form.reset(); 
    });

    function updateUI(tdee, targetCals, protein, carbs, fats) {
        // Animate numbers counting up (simple version)
        animateValue(targetCaloriesEl, 0, targetCals, 1000);
        animateValue(tdeeCaloriesEl, 0, tdee, 1000);
        
        macroProteinEl.textContent = protein;
        macroCarbsEl.textContent = carbs;
        macroFatsEl.textContent = fats;
    }

    function animateValue(obj, start, end, duration) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            obj.innerHTML = Math.floor(progress * (end - start) + start);
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }

    function generateMealPlan(totalCals, totalProtein, totalCarbs, totalFats) {
        // Simple distribution: 4 meals
        // Breakfast: 25%, Lunch: 35%, Snack: 10%, Dinner: 30%
        
        const mealTemplates = [
            {
                name: "Breakfast",
                ratio: 0.25,
                options: [
                    "Oatmeal with protein powder, berries, and a handful of almonds.",
                    "Scrambled egg whites with spinach, mushrooms, and a slice of whole-grain toast.",
                    "Greek yogurt parfait with low-calorie granola and flax seeds."
                ]
            },
            {
                name: "Lunch",
                ratio: 0.35,
                options: [
                    "Grilled chicken breast with half a cup of quinoa and steamed broccoli.",
                    "Tuna salad with light mayo, celery, and a large mixed green salad.",
                    "Turkey breast wrap with whole-wheat tortilla, avocado, and sprouts."
                ]
            },
            {
                name: "Afternoon Snack",
                ratio: 0.10,
                options: [
                    "An apple with 1 tbsp of peanut butter.",
                    "A scoop of whey protein in water or almond milk.",
                    "Cottage cheese with cucumber slices."
                ]
            },
            {
                name: "Dinner",
                ratio: 0.30,
                options: [
                    "Baked salmon fillet with roasted asparagus and a small sweet potato.",
                    "Lean ground turkey stir-fry with bell peppers, onions, and cauliflower rice.",
                    "Grilled tofu steak with sautéed kale and a hint of sesame oil."
                ]
            }
        ];

        mealListEl.innerHTML = ''; // Clear existing

        mealTemplates.forEach((meal, index) => {
            const mealCals = Math.round(totalCals * meal.ratio);
            const mealProtein = Math.round(totalProtein * meal.ratio);
            const mealCarbs = Math.round(totalCarbs * meal.ratio);
            const mealFats = Math.round(totalFats * meal.ratio);

            // Randomly select one option for variety
            const suggestion = meal.options[Math.floor(Math.random() * meal.options.length)];

            const mealHTML = `
                <div class="meal-item" style="animation: fadeIn 0.5s ease forwards ${index * 0.1}s; opacity: 0;">
                    <div class="meal-info">
                        <h4>${meal.name}</h4>
                        <p class="meal-desc"><strong>Suggested:</strong> ${suggestion}</p>
                        <p class="meal-desc" style="margin-top: 5px; font-size: 0.8rem; color: var(--text-muted);">
                            Approx. Macros: P: ${mealProtein}g | C: ${mealCarbs}g | F: ${mealFats}g
                        </p>
                    </div>
                    <div class="meal-cals">
                        ${mealCals} kcal
                    </div>
                </div>
            `;
            
            mealListEl.insertAdjacentHTML('beforeend', mealHTML);
        });
    }
});
