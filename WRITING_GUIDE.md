# 📝 Writing Guide - Random Bucket

## Post Front Matter

Every post must start with YAML front matter:

```markdown
---
title: "Your Post Title"
date: "2026-01-08"
excerpt: "A brief description of your post"
category: "matematica"
author: "Your Name"
---
```

### Available Categories

- `matematica` - Mathematics
- `ciencia` - Science
- `tecnologia` - Technology
- `reflexoes` - Thoughts
- `inmemoriam` - In Memoriam (for special tributes)

---

## 📐 LaTeX Support

You can use LaTeX to render mathematical equations in your posts.

### Inline Math

Use single dollar signs for inline math:

```markdown
The famous equation $E = mc^2$ shows the relationship between energy and mass.
```

**Result:** The famous equation $E = mc^2$ shows the relationship between energy and mass.

### Block Math

Use double dollar signs for block equations:

```markdown
$$
\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
$$
```

**Result:**
$$
\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
$$

### LaTeX Examples

```markdown
- Greek letters: $\alpha$, $\beta$, $\gamma$, $\Delta$, $\pi$, $\sigma$
- Fractions: $\frac{a}{b}$
- Square roots: $\sqrt{x}$, $\sqrt[3]{x}$
- Subscripts and superscripts: $x_1$, $x^2$, $x_i^2$
- Summation: $\sum_{i=1}^{n} i$
- Integrals: $\int_0^1 f(x) dx$
- Limits: $\lim_{x \to \infty} f(x)$
- Matrices: $\begin{pmatrix} a & b \\ c & d \end{pmatrix}$
```

---

## 💻 Code Blocks

Use triple backticks with language specification for syntax highlighting and automatic line numbers:

\`\`\`python
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

print(fibonacci(10))
\`\`\`

**Supported languages:**
- `python`
- `javascript` / `js`
- `typescript` / `ts`
- `bash` / `shell`
- `java`
- `c` / `cpp`
- `rust`
- `go`
- `html`
- `css`
- And many more...

---

## 📝 Text Formatting Templates

### 1. Citações / Blockquotes

Use `>` for quotes, citations, or important notes:

```markdown
> "A mathematician is a device for turning coffee into theorems."
> — Paul Erdős

> **Note:** This is an important observation that deserves special attention.
```

**Result:**
> "A mathematician is a device for turning coffee into theorems."
> — Paul Erdős

### 2. Parágrafos / Paragraphs

Normal paragraphs are automatically formatted with proper spacing and justification:

```markdown
This is a regular paragraph. All paragraph text is automatically justified for a professional look. Simply write your text normally, and the styling will be applied automatically.

This is another paragraph. Leave a blank line between paragraphs to separate them properly.
```

### 3. Texto Justificado / Text Alignment

By default, all paragraphs (`<p>` tags) are justified. For center-aligned text, use HTML:

```markdown
<div style="text-align: center;">
This text is centered.
</div>
```

For right-aligned text:

```markdown
<div style="text-align: right;">
This text is right-aligned.
</div>
```

### 4. Ênfase de Texto / Text Emphasis

```markdown
**Bold text** for strong emphasis

*Italic text* for light emphasis

***Bold and italic*** for maximum emphasis

~~Strikethrough~~ for deleted text
```

**Result:**
- **Bold text** for strong emphasis
- *Italic text* for light emphasis
- ***Bold and italic*** for maximum emphasis
- ~~Strikethrough~~ for deleted text

---

## 🖼️ Media Templates

### 1. Images / Imagens

#### Simple Image

```markdown
![Alt text describing the image](https://example.com/image.jpg)
```

#### Image with Caption

```markdown
<figure>
  <img src="https://example.com/image.jpg" alt="Description of image" />
  <figcaption>This is the image caption explaining what the image shows.</figcaption>
</figure>
```

#### Responsive Image (recommended)

```markdown
<div style="text-align: center; margin: 2rem 0;">
  <img src="https://example.com/image.jpg" alt="Description" style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);" />
  <p style="margin-top: 0.5rem; font-size: 0.875rem; color: #6b7280;"><em>Image caption goes here</em></p>
</div>
```

### 2. Image Carousel / Galeria de Imagens

Create a simple image gallery:

```markdown
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem; margin: 2rem 0;">
  <div>
    <img src="https://example.com/image1.jpg" alt="Image 1" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px;" />
    <p style="text-align: center; margin-top: 0.5rem; font-size: 0.875rem;">Caption 1</p>
  </div>
  <div>
    <img src="https://example.com/image2.jpg" alt="Image 2" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px;" />
    <p style="text-align: center; margin-top: 0.5rem; font-size: 0.875rem;">Caption 2</p>
  </div>
  <div>
    <img src="https://example.com/image3.jpg" alt="Image 3" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px;" />
    <p style="text-align: center; margin-top: 0.5rem; font-size: 0.875rem;">Caption 3</p>
  </div>
</div>
```

### 3. Audio / Áudio

Embed audio files:

```markdown
<audio controls style="width: 100%; margin: 1.5rem 0;">
  <source src="https://example.com/audio.mp3" type="audio/mpeg">
  <source src="https://example.com/audio.ogg" type="audio/ogg">
  Your browser does not support the audio element.
</audio>
<p style="text-align: center; font-size: 0.875rem; color: #6b7280;"><em>Audio title or description</em></p>
```

### 4. Video (YouTube, Vimeo, etc.)

```markdown
<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; margin: 2rem 0;">
  <iframe 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;" 
    src="https://www.youtube.com/embed/VIDEO_ID" 
    title="Video title" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen>
  </iframe>
</div>
```

---

## 📚 References / Referências

### Academic-style References

```markdown
## References

1. Knuth, D. E. (1997). *The Art of Computer Programming, Volume 1: Fundamental Algorithms* (3rd ed.). Addison-Wesley.

2. Russell, B., & Whitehead, A. N. (1910-1913). *Principia Mathematica*. Cambridge University Press.

3. Euler, L. (1748). *Introductio in analysin infinitorum*. Lausanne.
```

### Inline References with Links

```markdown
According to [Knuth (1997)](https://example.com/reference), algorithm analysis is fundamental...

As demonstrated in [recent research](https://doi.org/10.xxxx/xxxxx), this approach shows...
```

### Footnote-style References

```markdown
This statement needs a reference[^1].

Another fact requiring citation[^2].

[^1]: Smith, J. (2020). "Title of Article". *Journal Name*, 10(2), 123-145.
[^2]: Johnson, A. (2021). *Book Title*. Publisher Name.
```

### Bibliography Section Template

```markdown
---

## Bibliography

<div style="padding-left: 2rem; text-indent: -2rem;">

**Books:**

- Knuth, Donald E. *The Art of Computer Programming*. Addison-Wesley, 1997.
- Russell, Bertrand. *Introduction to Mathematical Philosophy*. Dover Publications, 1993.

**Articles:**

- Euler, Leonhard. "De summis serierum reciprocarum." *Commentarii academiae scientiarum Petropolitanae* 7 (1740): 123-134.
- Gauss, Carl Friedrich. "Disquisitiones Arithmeticae." *Leipzig*, 1801.

**Online Resources:**

- [Mathematical Association of America](https://www.maa.org)
- [arXiv Mathematics Archive](https://arxiv.org/archive/math)

</div>
```

---

## 🎨 Special Formatting

### Highlight Box / Caixa de Destaque

```markdown
<div style="background-color: #fef3c7; border-left: 4px solid #f59e0b; padding: 1rem; margin: 1.5rem 0; border-radius: 4px;">
  <strong>⚠️ Important:</strong> This is a highlighted box for important information.
</div>
```

### Info Box

```markdown
<div style="background-color: #dbeafe; border-left: 4px solid #3b82f6; padding: 1rem; margin: 1.5rem 0; border-radius: 4px;">
  <strong>ℹ️ Info:</strong> This is an informational note.
</div>
```

### Success Box

```markdown
<div style="background-color: #d1fae5; border-left: 4px solid #10b981; padding: 1rem; margin: 1.5rem 0; border-radius: 4px;">
  <strong>✓ Success:</strong> This indicates a successful outcome or tip.
</div>
```

### Two-Column Layout

```markdown
<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin: 2rem 0;">
  <div>
    <h3>Left Column</h3>
    <p>Content for the left side.</p>
  </div>
  <div>
    <h3>Right Column</h3>
    <p>Content for the right side.</p>
  </div>
</div>
```

---

## 📋 Lists

### Unordered Lists

```markdown
- First item
- Second item
  - Nested item
  - Another nested item
- Third item
```

### Ordered Lists

```markdown
1. First step
2. Second step
3. Third step
```

### Task Lists

```markdown
- [x] Completed task
- [ ] Pending task
- [ ] Another pending task
```

---

## 🔗 Links

```markdown
[Link text](https://example.com)

[Link with title](https://example.com "This appears on hover")

<https://example.com> (automatic link)
```

---

## Post Structure Best Practices

1. **Start with a clear title** (H1 in front matter)
2. **Use sections** (H2 `##`, H3 `###`) to organize content
3. **Mix text with code examples** when relevant
4. **Include LaTeX equations** for mathematical concepts
5. **Use blockquotes** for important notes or citations
6. **Add code blocks** with proper language highlighting
7. **Keep paragraphs concise** and well-structured
8. **Add images or media** to illustrate concepts
9. **Include references** for academic or technical content

---

## Complete Example Post

```markdown
---
title: "Understanding Prime Numbers"
date: "2026-01-08"
excerpt: "An exploration of prime numbers and their properties"
category: "matematica"
author: "Your Name"
---

# Understanding Prime Numbers

Prime numbers are the building blocks of mathematics. A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself.

## Definition

> A prime number $p$ is an integer greater than 1 such that its only positive divisors are 1 and $p$ itself.

Mathematically, we can express this as:

$$
p \in \mathbb{P} \iff \forall d \in \mathbb{N}, d \mid p \implies d = 1 \vee d = p
$$

## Examples

The first few prime numbers are: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29...

### Implementation

Here's a simple Python function to check if a number is prime:

\`\`\`python
def is_prime(n):
    if n < 2:
        return False
    for i in range(2, int(n ** 0.5) + 1):
        if n % i == 0:
            return False
    return True

# Test the function
print(is_prime(17))  # True
print(is_prime(18))  # False
\`\`\`

## References

1. Hardy, G. H., & Wright, E. M. (2008). *An Introduction to the Theory of Numbers* (6th ed.). Oxford University Press.
```

---
category: "matematica"
author: "imrooteodoro"
---

# Understanding Prime Numbers

A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself.

## Mathematical Definition

A number $p > 1$ is prime if:

$$\forall a, b \in \mathbb{N}: p = ab \implies a = 1 \text{ or } b = 1$$

## Finding Primes

The Sieve of Eratosthenes is an ancient algorithm:

\`\`\`python
def sieve_of_eratosthenes(n):
    primes = [True] * (n + 1)
    primes[0] = primes[1] = False
    
    for i in range(2, int(n**0.5) + 1):
        if primes[i]:
            for j in range(i*i, n + 1, i):
                primes[j] = False
    
    return [i for i in range(n + 1) if primes[i]]

print(sieve_of_eratosthenes(30))
\`\`\`

> **Note**: This algorithm has time complexity $O(n \log \log n)$.

## Conclusion

Prime numbers are fundamental to number theory and cryptography.
```

## Tips

- Preview your posts locally before publishing
- Test LaTeX equations to ensure proper rendering
- Use descriptive variable names in code examples
- Add comments to complex code blocks
- Include real-world applications when possible
