.PHONY: help site vendor css font fontawesome devicon clean

TAILWIND_VERSION        := 3.4.19
LUCIDE_VERSION          := 1.34.0
FONTAWESOME_VERSION     := 7.3.1
DEVICON_VERSION         := 2.17.0
MARKED_VERSION          := 18.0.11
HIGHLIGHTJS_VERSION     := 11.12.0
MERMAID_VERSION         := 11.17.2
DOMPURIFY_VERSION       := 3.2.4
JSYAML_VERSION          := 4.1.0
GITHUB_MARKDOWN_VERSION := 5.8.1

VENDOR_DIR := assets/vendor
JS_DIR     := $(VENDOR_DIR)/js
CSS_DIR    := $(VENDOR_DIR)/css
FONTS_DIR  := $(VENDOR_DIR)/fonts
FA_DIR     := $(VENDOR_DIR)/fontawesome
BUILD_DIR  := build
TAILWIND   := $(BUILD_DIR)/tailwindcss

TAILWIND_OS   := $(shell uname -s | tr '[:upper:]' '[:lower:]' | sed 's/darwin/macos/')
TAILWIND_ARCH := $(shell uname -m | sed 's/x86_64/x64/;s/aarch64/arm64/')

# Google Fonts serves woff2 only to a browser-shaped User-Agent; anything else gets ttf.
UA  := Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36
UVX := uv tool run

CYAN  := \033[0;36m
GREEN := \033[0;32m
NC    := \033[0m

help: ## Show this help
	@echo "$(CYAN)Available targets:$(NC)"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "  $(GREEN)%-10s$(NC) %s\n", $$1, $$2}'

.DEFAULT_GOAL := help

site: vendor css ## Vendor every third-party asset and compile the stylesheets

vendor: ## Download every pinned third-party asset into assets/vendor/
	@mkdir -p $(JS_DIR) $(CSS_DIR) $(FONTS_DIR) $(FA_DIR)/css $(FA_DIR)/webfonts
	@curl -sfL "https://cdn.jsdelivr.net/npm/lucide@$(LUCIDE_VERSION)/dist/umd/lucide.min.js" -o "$(JS_DIR)/lucide.min.js"
	@curl -sfL "https://cdn.jsdelivr.net/npm/marked@$(MARKED_VERSION)/lib/marked.umd.js" -o "$(JS_DIR)/marked.umd.js"
	@curl -sfL "https://cdn.jsdelivr.net/npm/@highlightjs/cdn-assets@$(HIGHLIGHTJS_VERSION)/highlight.min.js" -o "$(JS_DIR)/highlight.min.js"
# Disabled: no post uses a mermaid fence, and the bundle is 3.5 MB. Uncomment with the script tag in blog/templates/post.html.
#	@curl -sfL "https://cdn.jsdelivr.net/npm/mermaid@$(MERMAID_VERSION)/dist/mermaid.min.js" -o "$(JS_DIR)/mermaid.min.js"
	@curl -sfL "https://cdn.jsdelivr.net/npm/dompurify@$(DOMPURIFY_VERSION)/dist/purify.min.js" -o "$(JS_DIR)/purify.min.js"
	@curl -sfL "https://cdn.jsdelivr.net/npm/js-yaml@$(JSYAML_VERSION)/dist/js-yaml.min.js" -o "$(JS_DIR)/js-yaml.min.js"
	@curl -sfL "https://cdn.jsdelivr.net/npm/@highlightjs/cdn-assets@$(HIGHLIGHTJS_VERSION)/styles/atom-one-light.min.css" -o "$(CSS_DIR)/atom-one-light.min.css"
	@curl -sfL "https://cdn.jsdelivr.net/npm/@highlightjs/cdn-assets@$(HIGHLIGHTJS_VERSION)/styles/atom-one-dark.min.css" -o "$(CSS_DIR)/atom-one-dark.min.css"
	@curl -sfL "https://cdn.jsdelivr.net/npm/github-markdown-css@$(GITHUB_MARKDOWN_VERSION)/github-markdown.min.css" -o "$(CSS_DIR)/github-markdown.min.css"
	@$(MAKE) --no-print-directory devicon
	@$(MAKE) --no-print-directory fontawesome
	@$(MAKE) --no-print-directory font FAMILY="Inter" SLUG=inter WEIGHTS="400;500;600;700;800"
	@$(MAKE) --no-print-directory font FAMILY="JetBrains+Mono" SLUG=jetbrains-mono WEIGHTS="400;500"
	@$(MAKE) --no-print-directory font FAMILY="Montserrat" SLUG=montserrat WEIGHTS="300;400;500;600;700"
	@$(MAKE) --no-print-directory font FAMILY="Open+Sans" SLUG=open-sans WEIGHTS="400;600"
	@echo "$(GREEN)Assets vendored into $(VENDOR_DIR)$(NC)"

font:
	@curl -sfL -H "User-Agent: $(UA)" \
	  "https://fonts.googleapis.com/css2?family=$(FAMILY):wght@$(WEIGHTS)&display=swap" \
	  -o "$(CSS_DIR)/$(SLUG).raw"
	@awk '/^\/\* /{keep = ($$0 ~ /^\/\* latin(-ext)? \*\/$$/)} keep' \
	  "$(CSS_DIR)/$(SLUG).raw" > "$(CSS_DIR)/$(SLUG).css"
	@rm -f "$(CSS_DIR)/$(SLUG).raw"
	@grep -o 'https://fonts.gstatic.com/[^)]*' "$(CSS_DIR)/$(SLUG).css" | sort -u \
	  | xargs -P 8 -I{} sh -c 'curl -sfL "$$1" -o "$(FONTS_DIR)/$$(basename "$$1")"' _ {}
	@sed -i.bak -E 's|https://fonts\.gstatic\.com/[^)]*/([^/)]+)|/assets/vendor/fonts/\1|g' "$(CSS_DIR)/$(SLUG).css"
	@rm -f "$(CSS_DIR)/$(SLUG).css.bak"

fontawesome:
	@curl -sfL "https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@$(FONTAWESOME_VERSION)/css/all.min.css" -o "$(FA_DIR)/css/all.min.css"
	@for f in fa-brands-400 fa-regular-400 fa-solid-900 fa-v4compatibility; do \
	  curl -sfL "https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@$(FONTAWESOME_VERSION)/webfonts/$$f.woff2" -o "$(FA_DIR)/webfonts/$$f.woff2"; \
	done
	@sed -i.bak 's|../webfonts/|/assets/vendor/fontawesome/webfonts/|g' "$(FA_DIR)/css/all.min.css"
	@rm -f "$(FA_DIR)/css/all.min.css.bak"

devicon:
	@curl -sfL "https://cdn.jsdelivr.net/npm/devicon@$(DEVICON_VERSION)/devicon.min.css" -o "$(CSS_DIR)/devicon.min.css"
	@set -e; tmp="$$(mktemp -d)"; trap 'rm -rf "$$tmp"' EXIT; \
	curl -sfL "https://cdn.jsdelivr.net/npm/devicon@$(DEVICON_VERSION)/fonts/devicon.ttf" -o "$$tmp/devicon.ttf"; \
	$(UVX) -q --from "fonttools[woff]" fonttools ttLib.woff2 compress \
	  -o "$(FONTS_DIR)/devicon.woff2" "$$tmp/devicon.ttf" >/dev/null 2>&1
	@sed -i.bak -E 's|src:url\("fonts/devicon[^;]*;src:url\("fonts/devicon[^;]*;|src:url("/assets/vendor/fonts/devicon.woff2") format("woff2");|' "$(CSS_DIR)/devicon.min.css"
	@rm -f "$(CSS_DIR)/devicon.min.css.bak"

css: $(TAILWIND) ## Compile the two site stylesheets into assets/vendor/css/
	@$(TAILWIND) --minify -c tailwind.config.js -o $(CSS_DIR)/tailwind.css
	@$(TAILWIND) --minify -c tailwind-resume.config.js -o $(CSS_DIR)/tailwind-resume.css
	@echo "$(GREEN)Compiled: $(CSS_DIR)/tailwind.css and $(CSS_DIR)/tailwind-resume.css$(NC)"

$(TAILWIND):
	@mkdir -p $(BUILD_DIR)
	@curl -sfL "https://github.com/tailwindlabs/tailwindcss/releases/download/v$(TAILWIND_VERSION)/tailwindcss-$(TAILWIND_OS)-$(TAILWIND_ARCH)" -o "$(TAILWIND)"
	@chmod +x "$(TAILWIND)"

clean: ## Remove the vendored tree and the downloaded Tailwind CLI
	@rm -rf $(VENDOR_DIR) $(BUILD_DIR)
	@echo "$(GREEN)Cleaned$(NC)"
