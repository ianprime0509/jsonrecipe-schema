# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a
Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to
[Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Changed

- Renamed `directionStep` to `direction` and refactor `directionGroup`
  into a definition
- Ingredient strings now have a regex pattern directly in the schema
- Spacing is more strict in ingredient and quantity strings (multiple spaces
  between components are disallowed)

## [0.0.1] - 2018-10-07

### Added

- Basic JSON schema
- TypeScript typings and AJV-based validator
