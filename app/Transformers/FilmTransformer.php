<?php

namespace App\Transformers;

use League\Fractal\TransformerAbstract;
use App\Models\Film;

class FilmTransformer extends TransformerAbstract
{
    /**
     * @return  array
     */
    public function transform(Film $film)
    {
        return $film->attributesToArray();
    }
}