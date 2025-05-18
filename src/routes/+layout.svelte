<script lang="ts">
	import '../app.css';
	import { LayoutHead } from '../lib/components/layout';
	import { Sonner } from '../lib/components/ui/sonner';

	let { children } = $props();
</script>

<LayoutHead />
<Sonner />

{@render children()}
