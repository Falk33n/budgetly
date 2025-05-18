<script lang="ts">
	import '../app.css';
	import { LayoutHead } from '../lib/components/layout';

	let { children } = $props();
</script>

<LayoutHead />

{@render children()}
