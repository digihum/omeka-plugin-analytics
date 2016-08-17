<?php
$fields = array(
	array(
		'label' => 'Google Analytics Property Id',
		'description' => 'The property id from Google Analytics for this site. Required.',
		'name' => 'property_id',
		'required' => true
	)
);
foreach ($fields as $row): ?>

<div class="field">
	<div id="<?php echo $row['name']; ?>-label" class="two columns alpha">
		<label for="<?php echo $row['name']; ?>" class="<?php if ($row['required'] === true){ echo "required"; } ?>"><?php echo $row['label']; ?></label>
	</div>
	<div class="inputs five columns omega">
		<p class="explanation"><?php echo $row['description']; ?></p>
		<input type="<?php echo (isset($row['password']) && $row['password'] === true) ? 'password' : 'text'; ?>" name="<?php echo $row['name']; ?>" id="<?php echo $row['name']; ?>" value="<?php echo option($row['name']); ?>" />
	</div>
</div>

<?php endforeach; ?>
