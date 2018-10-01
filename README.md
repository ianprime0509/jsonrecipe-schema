# JSON recipe format

NOTE: this repository will probably disappear soon, to be replaced with a
more modular configuration (schema in one repository, tools in another,
etc.).

This project intends to provide a standard way to store (culinary) recipe
information in JSON format. Its (admittedly ambitious) goal is to be simple
enough for quick creation of recipes yet expansive and precise enough to
provide a reasonably complete machine-readable description.

## Ingredient format

Each ingredient in the ingredient list may be either a single string or an
object. The advantage of the string format is that it is considerably easier
to read and write for a human; the advantage of the object format is the
same, but for a computer. A sample ingredient in the object format is as
follows:

```json
{
  "quantity": 2,
  "unit": "cup",
  "item": "water",
  "preparation": "boiled"
}
```

The quantity can also be a fractional number; using floating point values
such as `1.1` is not allowed.

```json
{
  "quantity": "1 1/4",
  "unit": "tablespoon",
  "item": "brown sugar"
}
```

TODO: more thoroughly describe the components.

In string format, the above two examples would be

```json
"2 cups water, boiled"
```

and

```json
"1 1/4 tablespoons brown sugar"
```

Thus, in terms of the components of the object format, the string format is

```
<quantity> <unit> <item>[, preparation]*
```

Note that the unit `"each"` must be explicitly provided in the string format
where desired; it is only correct to write `"1 each red pepper"`, not
`"1 red pepper"`. On the contrary, the object format allows the omission of
the `unit` key to imply `"unit": "each"`.

TODO: write a formal grammar and expand on some of the additional cases to
consider. Give an example of a case that might not be correctly handled by
the string format that must be expressed in object format (or specify why
this is impossible).
