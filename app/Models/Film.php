<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Film
 * @package App\Models
 */
class Film extends Model
{
	protected $table = 'films';

	/**
	 * The attributes that are mass assignable.
	 *
	 * @var array
	 */
	protected $fillable = [
		'code','name', 'description', 'status', 'created_by',
	];

}