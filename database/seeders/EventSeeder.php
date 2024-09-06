<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Event;

class EventSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Event::create([
            'year' => '2013',
            'title' => 'High School',
            'description' => 'Completed high school education.'
        ]);

        Event::create([
            'year' => '2015',
            'title' => 'Intermediate',
            'description' => 'Completed intermediate studies with a focus on science (Math/Computer Science).'
        ]);

        Event::create([
            'year' => '2017',
            'title' => 'Started Bachelor\'s Degree',
            'description' => 'Enrolled in a Bachelor\'s program in Computer Science.'
        ]);

        Event::create([
            'year' => '2018',
            'title' => 'First Internship',
            'description' => 'Completed a summer internship as a junior developer at a local IT firm.'
        ]);

        Event::create([
            'year' => '2019',
            'title' => 'Contributed to Open Source',
            'description' => 'Made first contributions to open-source projects on GitHub.'
        ]);

        Event::create([
            'year' => '2020',
            'title' => 'Graduated from College',
            'description' => 'Graduated with a Bachelor\'s degree in Computer Science.'
        ]);

        Event::create([
            'year' => '2021',
            'title' => 'First Full-time Job',
            'description' => 'Started working as a software developer at XYZ Tech.'
        ]);

        Event::create([
            'year' => '2022',
            'title' => 'Attended First Tech Conference',
            'description' => 'Participated in a major tech conference as a speaker on web development.'
        ]);

        Event::create([
            'year' => '2023',
            'title' => 'Promoted to Senior Developer',
            'description' => 'Promoted to senior software developer after demonstrating strong leadership and technical skills.'
        ]);
    }
}
