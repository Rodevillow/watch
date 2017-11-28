<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon as Carbon;

class FilmsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $film = [
            [
                'code' => '#100',
                'name' => 'Superman',
                'description' => 'Test Description of Superman',
                'status' => 1,
                'img' => 'https://rlv.zcache.com/superman_s_shield_classic_logo_classic_round_sticker-r5f05597257954b338cad47d8999c2b04_v9waf_8byvr_540.jpg',
                'created_at' => Carbon::now()
            ],
            [
                'code' => '#101',
                'name' => 'Betman',
                'description' => 'Test Description of Betman',
                'status' => 1,
                'img' => 'https://i.pinimg.com/736x/95/2f/b8/952fb8e9c2a25b538c1347873df8e036--batman-art-batman-drawing.jpg',
                'created_at' => Carbon::now()
            ],
            [
                'code' => '#102',
                'name' => 'Kapitan Amerika',
                'description' => 'Test Description of Kapitan',
                'status' => 1,
                'img' => 'https://static-eu.insales.ru/images/products/1/7376/122412240/Spinner.jpg',
                'created_at' => Carbon::now()
            ],
            [
                'code' => '#103',
                'name' => 'Deadpool',
                'description' => 'Test Description of Deadpool',
                'status' => 1,
                'img' => 'https://s.pacn.ws/640/qx/nendoroid-no-662-deadpool-deadpool-orechan-edition-484653.1.jpg?obn0sv',
                'created_at' => Carbon::now()
            ],
            [
                'code' => '#104',
                'name' => 'Spiderman',
                'description' => 'Test Description of Spiderman',
                'status' => 1,
                'img' => 'https://dreager1.files.wordpress.com/2010/12/2379-spiderman.gif',
                'created_at' => Carbon::now()
            ],
            [
                'code' => '#105',
                'name' => 'Ironman',
                'description' => 'Test Description of Ironman',
                'status' => 1,
                'img' => 'https://vignette.wikia.nocookie.net/marvelheroes/images/c/c1/F_ironman_extremis_vu.png/revision/latest?cb=20170719231154',
                'created_at' => Carbon::now()
            ],
            [
                'code' => '#106',
                'name' => 'Thor',
                'description' => 'Test Description of Thor',
                'status' => 1,
                'img' => 'https://images-na.ssl-images-amazon.com/images/I/41USOWKfICL._SX466_.jpg',
                'created_at' => Carbon::now()
            ],
        ];

        DB::table('films')->insert($film);
    }
}
