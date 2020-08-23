const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({
    attributes: ['id', 'tag_name'],
    include: [{
      model: Product,
      attributes: ['id']
    }
    ]
  })
  .then(Tag => res.json(ProductTag))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findOne({
    where: {
      id: req.params.id
    },
    attributes: ['id', 'tag_name'],
    include: [{
      model: Product,
      attributes: ['id']
    }]
  }) .then(ProductTag => {
    if (!ProductTag) {
        res.status(404).json({ message: 'No tag found with this id' });
        return;
    }
    res.json(ProductTag);
})
.catch(err => {
    console.log(err);
    res.status(500).json(err);
});


});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create({
    title: req.body.title
  })
  .then(ProductTag => res.json(ProductTag))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  ProductTag.update(
    {
    tag_name: req.body.tag_name
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
  .then(ProductTag => {
    if (!ProductTag) {
      res.status(404).json({ message: 'No product tag found with this id' });
      return;
    }
    res.json(ProductTag);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
  


});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  ProductTag.destroy({
    where: {
      id: req.params.id
    }

  })
  .then(ProductTag => {
    if (!ProductTag) {
      res.status(404).json({ message: 'No product tag found with this id' });
      return;
    }
    res.json(ProductTag);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;