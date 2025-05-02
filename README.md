A basic blog website using [hugo](https://github.com/gohugoio/hugo) as framework, and [hugo-PaperMod](https://github.com/adityatelange/hugo-PaperMod) as the website's theme.

### Prerequisites

- Hugo v0.147.1
- Git 2.49.0 (or latest)

### Updating hugo-PaperMod

Go to root folder of site, then run this command.

```bash
git submodule update --remote --merge
```

Then rebuild site using command:

```bash
hugo
```

### Deployment

Deploy the website locally via localhost:

```bash
hugo server
```

The website will be hosted in `http://localhost:1313/`.
